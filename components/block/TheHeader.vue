<template>
  <header class="header">
    <div class="logo">
      <UiTextH1>TEMPLATER</UiTextH1>
    </div>
    <div class="navigation">
      <nuxt-link to="/auth/login">Log In</nuxt-link>
      <nuxt-link to="/auth/registration">Sing Up</nuxt-link>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UiTextH1 from "../ui/UiTextH1.vue";

export default defineComponent({
  name: "Header",
  components: {
    UiTextH1,
  },
});
</script>
<style scoped lang="scss">
@import "~/assets/styles/variables";

.header {
  width: 100%;
  height: 100px;
  padding: 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: $secondary-color;

  .logo {
  }

  .navigation {
    display: flex;
    gap: 10px;
  }
}
</style>
