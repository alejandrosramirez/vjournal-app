<template>
	<div class="d-flex justify-content-center">
		<h1 class="align-self-center">NoEntrySelected</h1>
	</div>

	<Fab />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	name: "NoEntrySelectedView",
	components: {
		Fab: defineAsyncComponent(() => import("@/modules/daybook/components/FabComponent.vue")),
	}
};
</script>

<style lang="scss" scoped>
div {
	height: 100%;
}
</style>
