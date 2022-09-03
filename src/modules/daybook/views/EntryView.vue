<template>
	<template v-if="entry">
		<div class="entry-title d-flex justify-content-between p-2">
			<div>
				<span class="text-success fs-3 fw-bold">{{ day }}</span>
				<span class="mx-1 fs-3">{{ month }}</span>
				<span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
			</div>

			<div>
				<button class="btn btn-danger mx-2">
					Borrar
					<i class="fa fa-trash"></i>
				</button>

				<button class="btn btn-primary">
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
			class="img-thumbnail"
			src="https://via.placeholder.com/700"
			alt="entry-picture"
		/>
	</template>

	<Fab :icon="'fa-save'" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

import getCustomDate from "@/modules/daybook/helpers/getCustomDate";

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
		};
	},
	methods: {
		entryById() {
			const entry = this.getEntryById(this.id);

			if (!entry) {
				return this.$router.push({ name: "daybook-no-entry-selected" });
			}

			this.entry = entry;
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
