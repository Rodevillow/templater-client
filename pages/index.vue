<template>
  <div class="container p-0">
    <div class="row pt-1 pb-1 gx-3 gy-3">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
           v-for="item in fakeItems"
           :key="item.uuid"
      >
        <CardDefault :title="item.name" :description="item.description"/>
      </div>
    </div>
    <div class="col-12">
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
