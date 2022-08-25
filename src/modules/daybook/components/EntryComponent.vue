<template>
	<div class="entry-container mb-3 pointer p-2">
		<div class="entry-container-title d-flex">
			<span class="text-success fs-5 fw-bold">24</span>
			<span class="mx-1 fs-5">Agosto</span>
			<span class="mx-2 fw-light">2022, Miércoles</span>
		</div>

		<div class="entry-container-description">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
			vitae alias sint quasi pariatur molestias obcaecati, dolorem, quia
			aspernatur voluptates eum dolores. Iure fuga dicta voluptatem
			laudantium adipisci, eos officia.
		</div>
	</div>
</template>

<script>
export default {
	name: "EntryComponent",
};
</script>

<style lang="scss" scoped>
.entry-container {
	border-bottom: 1px solid #2c3e50;
	transition: 0.2s all ease-in;

	&:hover {
		background-color: lighten($color: grey, $amount: 45);
		transition: 0.2s all ease-in;
	}

	&-description {
		font-size: 12px;
	}
}
</style>
