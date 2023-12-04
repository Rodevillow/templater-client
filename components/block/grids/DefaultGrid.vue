<template>
	<div class="default-grid">
		<div
			v-for="index in 10 * 10"
			:class="{
				'striped-odd': (index % 2 === 0),
				'striped-event': (index % 2 !== 0)
			}"
			:key="index"
		></div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.default-grid {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(10, 1fr);
	//gap: 1px;
	height: calc(100vh - 350px);
	width: 100%;

	& > .striped-odd {
		width: 100%;
		height: 100%;
		background-color: red;

		&:nth-child(odd) {
			background-color: black;
			color: white;
		}

		&:nth-child(even) {
			background-color: gainsboro;
			color: black;
		}
	}

	& > .cell-even {
		width: 100%;
		height: 100%;
		background-color: red;

		&:nth-child(odd) {
			background-color: white;
			color: black;
		}

		&:nth-child(even) {
			background-color: black;
			color: gainsboro;
		}
	}
}
</style>