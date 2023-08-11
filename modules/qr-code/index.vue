<template>
  <qrcode-vue :value="value" :level="props.level" :renderAs="props.renderAs" :size="props.size" :background="props.bg" />
</template>

<script setup lang="ts">
import QrcodeVue, { Level, RenderAs } from "qrcode.vue";
import { PropType } from "vue";

export interface QrCodeProps {
  bg: string;
  size: number;
  value: string;
  level: Level;
  renderAs: RenderAs;
}

const props: QrCodeProps = defineProps({
  value: {
    type: String as PropType<string>,
    required: true,
  },

  level: {
    type: String as PropType<Level>,
    default: "H",
  },

  renderAs: {
    type: String as PropType<RenderAs>,
    default: "svg",
  },

  size: {
    type: Number as PropType<number>,
    required: true,
  },

  bg: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>
