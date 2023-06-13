<template>
  <div class="container">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import TheFooter from "~/components/block/TheFooter.vue";
import TheHeader from "~/components/block/TheHeader.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<style scoped></style>
