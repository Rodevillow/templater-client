<template>
  <footer class="footer">
    <UiTextH1>TEMPLATER</UiTextH1>
    <UiTextSmall>Ukraine {{ currentYear }}</UiTextSmall>
  </footer>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import UiTextH1 from "../ui/UiTextH1.vue";
import UitextSmall from "../ui/UiTextSmall.vue";

export default defineComponent({
  name: "Footer",
  components: {
    UiTextH1,
    UitextSmall,
  },

  setup() {
    const currentYear = ref(new Date().getFullYear().toString());

    onMounted(() => {
      currentYear.value = new Date().getFullYear().toString();
    });

    return {
      currentYear,
    };
  },
});
</script>
<style scoped lang="scss">
@import "~/assets/styles/variables";

.footer {
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: $secondary-color;
}
</style>
