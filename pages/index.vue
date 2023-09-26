<template>
  <div class="container">
    <div class="">
      <div class=""
           v-for="item in fakeItems"
           :key="item.uuid"
      >
        <CardDefault :title="item.name" :description="item.description"/>
      </div>
    </div>
    <div class="">
      <i class="bi bi-box-arrow-in-left"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardDefault from "@/components/block/card/CardDefault.vue";
import { fakeItems } from "@/utils/fakeData/items";

definePageMeta({
  middleware: ["auth"]
});
</script>
