<template>
	<Navbar />

	<div class="d-flex">
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
};
</script>

<style></style>
