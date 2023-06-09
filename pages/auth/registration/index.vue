<template>
  <div class="registration">
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto">
          FORM REGISTRATION
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UiButtonSuccess from "~/components/ui/UiButtonSuccess.vue";
import UiInput from "~/components/ui/UiInput.vue";

definePageMeta({
  layout: "main",
});
export default defineComponent({
  name: "Registration",
  components: {UiInput, UiButtonSuccess},
});
</script>
