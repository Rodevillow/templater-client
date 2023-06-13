<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-6">
        <UiTextH2 class="mb-5 text-center">FORGOT PASSWORD</UiTextH2>
        <form>
          <div class="mb-5">
            <UiInput type="text" label="Email" placeholder="example@test.com" />
          </div>
          <UiButtonPrimary class="w-100">SEND RESET LINK</UiButtonPrimary>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UiTextH2 from "~/components/ui/UiTextH2.vue";
import UiInput from "~/components/ui/UiInput.vue";
import UiButtonPrimary from "~/components/ui/UiButtonPrimary.vue";

definePageMeta({
  layout: "default",
});

export default defineComponent({
  name: "Forgot",
  components: {
    UiTextH2,
    UiInput,
    UiButtonPrimary,
  },
});
</script>
