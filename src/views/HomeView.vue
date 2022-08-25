<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />

		<h1>Hola mundo</h1>

		<button @click="goToDaybook" class="btn btn-primary">Primary</button>
		<button @click="goToDaybook" class="btn btn-secondary">Srcondary</button>
		<button @click="goToDaybook" class="btn btn-success">Success</button>
	</div>
</template>

<script>
export default {
	methods: {
		goToDaybook() {
			this.$router.push({ name: "daybook-no-entry-selected" });
		},
	},
};
</script>
