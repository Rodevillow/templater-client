<template>
  <h1>Ui elements</h1>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>Buttons</h3>
        <UiButtonSuccess>ButtonSuccess</UiButtonSuccess>
        <UiButtonSecondary>UiButtonSecondary</UiButtonSecondary>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UiButtonSuccess from "~/components/ui/UiButtonSuccess.vue";
import UiButtonSecondary from "~/components/ui/UiButtonSecondary.vue";

export default defineComponent({
  name: 'Ui',
  components: {UiButtonSecondary, UiButtonSuccess}
})
</script>