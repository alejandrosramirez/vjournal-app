<template>
	<Navbar />

	<div v-if="isLoading" class="row justify-content-md-center">
		<div class="col-3 alert alert-info text-center mt-5">
			Espere por favor...
			<i class="fa fa-spin fa-sync"></i>
		</div>
	</div>

	<div v-else class="d-flex">
		<div class="col-4">
			<EntryList />
		</div>

		<div class="col">
			<router-view />
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default {
	name: "DaybookLayout",
	components: {
		EntryList: defineAsyncComponent(() =>
			import("@/modules/daybook/components/EntryListComponent.vue")
		),
		Navbar: defineAsyncComponent(() =>
			import("@/modules/daybook/components/NavbarComponent.vue")
		),
	},
	methods: {
		...mapActions("journal", ["loadEntries"]),
	},
	computed: {
		...mapState("journal", ["isLoading"]),
	},
	created() {
		this.loadEntries();
	},
};
</script>

<style></style>
