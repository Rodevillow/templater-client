<template>
	<div class="grid">
		<DefaultGrid />
	</div>
</template>

<script lang="ts" setup>
import DefaultGrid from "~/components/block/grids/DefaultGrid.vue"
</script>

<style lang="scss" scoped>
.grid {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #8d2323;
	height: calc(100vh - 350px);
	width: 100%;
}
</style>