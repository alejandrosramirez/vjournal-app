<template>
	<div class="entry-title d-flex justify-content-between p-2">
		<div>
			<span class="text-success fs-3 fw-bold">31</span>
			<span class="mx-1 fs-3">Agosto</span>
			<span class="mx-2 fs-4 fw-light">2022, Miércoles</span>
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
		<textarea placeholder="¿Qué sucedió hoy?"></textarea>
	</div>

	<Fab :icon="'fa-save'" />

	<img
		class="img-thumbnail"
		src="https://via.placeholder.com/700"
		alt="entry-picture"
	/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	name: "EntryView",
	components: {
		Fab: defineAsyncComponent(() =>
			import("@/modules/daybook/components/FabComponent.vue")
		),
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
