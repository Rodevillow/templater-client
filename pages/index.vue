<template>
	<div class="container">
		<div class="items-list__wrapper">
			<div class="items-list"
				 v-for="item in fakeItems"
				 :key="item.uuid"
			>
				<CardDefault :title="item.name" :description="item.description" />
			</div>
		</div>
		<div class="">
			<i class="bi bi-box-arrow-in-left"></i>
		</div>
	</div>
</template>

<script lang="ts" setup>
import CardDefault from "@/components/block/card/CardDefault.vue"
import { fakeItems } from "@/utils/fakeData/items"

definePageMeta({
	middleware: ["auth"],
})
</script>

<style lang="scss" scoped>
.items-list {
	&__wrapper {
		display: grid;
		grid-gap: var(--spacer);
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}
</style>
