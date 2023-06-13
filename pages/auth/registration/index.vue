<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-6">
        <UiTextH2 class="mb-5 text-center">REGISTRATION</UiTextH2>
        <form>
          <div class="mb-5">
            <UiInput type="text" label="Email" placeholder="example@test.com" />
          </div>
          <div class="mb-5">
            <UiInput type="password" label="Password" placeholder="********" />
          </div>
          <div class="mb-5">
            <UiInput type="password" label="Confirm password" placeholder="********" />
          </div>
          <UiButtonPrimary class="w-100">REGISTRATION</UiButtonPrimary>
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
  name: "Registration",
  components: {
    UiTextH2,
    UiInput,
    UiButtonPrimary,
  },
});
</script>
