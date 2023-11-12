<template>
	<UiAccordion :data="testData" @change="handleAccordionChange" />
</template>

<script setup lang="ts">
import UiAccordion from '~/components/ui/UiAccordion.vue'
import IAccordionItem from "~/composables/interfaces/IAccordeonItem";

let testData = reactive([
  {
    isActive: false,
    title: "Some test title 1",
    description: "Some test description 1",
  },
  {
    isActive: false,
    title: "Some test title 2",
    description: "Some test description 2",
  },
  {
    isActive: false,
    title: "Some test title 3",
    description: "Some test description 3",
  },
]);

const handleAccordionChange = (changedData: Array<IAccordionItem>) => testData = changedData;
</script>
