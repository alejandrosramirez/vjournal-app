<template>
	<template v-if="entry">
		<div class="entry-title d-flex justify-content-between p-2">
			<div>
				<span class="text-success fs-3 fw-bold">{{ day }}</span>
				<span class="mx-1 fs-3">{{ month }}</span>
				<span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
			</div>

			<div>
				<input
					type="file"
					@change="selectedImage"
					ref="imageSelector"
					v-show="false"
					accept="image/*"
				/>

				<button
					v-if="entry.id"
					class="btn btn-danger mx-2"
					@click="eraseEntry"
				>
					Borrar
					<i class="fa fa-trash"></i>
				</button>

				<button
					class="btn btn-primary"
					@click="selectImage"
				>
					Subir foto
					<i class="fa fa-upload"></i>
				</button>
			</div>
		</div>

		<hr />

		<div class="d-flex flex-column px-3 h-75">
			<textarea
				v-model="entry.text"
				placeholder="¿Qué sucedió hoy?"
			></textarea>
		</div>

		<img
			v-if="entry.picture && !localPicture"
			class="img-thumbnail"
			:src="entry.picture"
			alt="entry-picture"
		/>

		<img
			v-if="localPicture"
			class="img-thumbnail w-10 h-10"
			:src="localPicture"
			alt="entry-picture"
		/>
	</template>

	<Fab
		:icon="'fa-save'"
		@on:click="saveEntry"
	/>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";

import getCustomDate from "@/modules/daybook/helpers/getCustomDate";
import uploadPicture from "@/modules/daybook/helpers/uploadPicture";

export default {
	name: "EntryView",
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	components: {
		Fab: defineAsyncComponent(() =>
			import("@/modules/daybook/components/FabComponent.vue")
		),
	},
	data() {
		return {
			entry: null,
			localPicture: null,
			localFile: null,
		};
	},
	methods: {
		...mapActions("journal", ["createEntry", "updateEntry", "deleteEntry"]),
		entryById() {
			let entry;

			if (this.id === "new") {
				entry = {
					text: "",
					date: new Date().getTime(),
				};
			} else {
				entry = this.getEntryById(this.id);

				if (!entry) {
					return this.$router.push({
						name: "daybook-no-entry-selected",
					});
				}
			}

			this.entry = entry;
		},
		async saveEntry() {
			new Swal({
				title: "Espere por favor",
				allowOutsideClick: false,
			});
			Swal.showLoading();

			const picture = await uploadPicture(this.localFile);

			this.entry.picture = picture;

			if (this.entry.id) {
				await this.updateEntry(this.entry);
			} else {
				const id = await this.createEntry(this.entry);

				this.$router.push({
					name: "daybook-entry-selected",
					params: { id },
				});
			}

			this.localFile = null;

			Swal.fire("Guardado", "Entrada registrada con exito", "success");
		},
		async eraseEntry() {
			const { isConfirmed } = await Swal.fire({
				title: "¿Estás seguro de eliminar?",
				text: "Una vez eliminado, el registro no se puede recuperar",
				showDenyButton: true,
				confirmButtonText: "Si, estoy seguro",
			});

			if (isConfirmed) {
				new Swal({
					title: "Espere por favor",
					allowOutsideClick: false,
				});
				Swal.showLoading();

				await this.deleteEntry(this.entry.id);

				this.$router.push({
					name: "daybook-no-entry-selected",
				});

				Swal.fire("Eliminado", "", "success");
			}
		},
		selectedImage(event) {
			const file = event.target.files[0];

			if (!file) {
				this.localPicture = null;
				this.localFile = null;
				return;
			}

			this.localFile = file;

			const fr = new FileReader();
			fr.onload = () => (this.localPicture = fr.result);
			fr.readAsDataURL(file);
		},
		selectImage() {
			this.$refs.imageSelector.click();
		},
	},
	computed: {
		...mapGetters("journal", ["getEntryById"]),
		day() {
			const { day } = getCustomDate(this.entry.date);

			return day;
		},
		month() {
			const { month } = getCustomDate(this.entry.date);

			return month;
		},
		yearDay() {
			const { yearDay } = getCustomDate(this.entry.date);

			return yearDay;
		},
	},
	created() {
		this.entryById();
	},
	watch: {
		id() {
			this.entryById();
		},
	},
};
</script>

<style lang="scss" scoped>
textarea {
	border: none;
	font-size: 20px;
	height: 100%;

	&:focus {
		outline: none;
	}
}

img {
	bottom: 150px;
	box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
	position: fixed;
	right: 20px;
	width: 200px;
}
</style>
