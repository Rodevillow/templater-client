<template>
  <div class="container">
    <h1>Main page</h1>
    <div class="row row-cols-3">
      <div class="col" v-for="item in items" :key="item.uuid">
        <CardDefault :title="item.name" :description="item.description" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardDefault from "~/components/block/card/CardDefault.vue";
import { fakeItems } from "~/utils/fakeData/items";

const items = fakeItems;
</script>
