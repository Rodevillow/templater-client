<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-6">
        <UiTextH2 class="mb-5 text-center">LOGIN</UiTextH2>
        <form>
          <div class="mb-5">
            <UiInput type="text" label="Email" placeholder="example@test.com" />
          </div>
          <div class="mb-5">
            <UiInput type="password" label="Password" placeholder="********" />
          </div>
          <UiButtonPrimary class="w-100">LOGIN</UiButtonPrimary>
        </form>
        <div class="mt-3 text-center">
          <nuxt-link to="/auth/forgot">Forgot password?</nuxt-link>
        </div>
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
  name: "Login",
  components: {
    UiTextH2,
    UiInput,
    UiButtonPrimary,
  },
});
</script>
