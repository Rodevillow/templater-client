<template>
  <div class="registration">
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto">
          FORM LOGIN
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useAppCore from "~/composables/useAppCore"

export default defineComponent({
  name: "Login",
  setup() {
    const applicationCore = useAppCore()

    applicationCore.auth.get()

    return {}
  }
});
</script>
