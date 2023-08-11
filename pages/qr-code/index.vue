<template>
  <div>
    <QrCodeModule
      :value="qrCodeValue"
      :level="qrCodeLevel"
      :renderAs="qrCodeRenderAs"
      :size="qrCodeSize"
      :bg="qrCodeBackground"
    />
  </div>
</template>

<script setup lang="ts">
import QrCodeModule from "@/modules/qr-code/index.vue";

const qrCodeValue = "https://ru.wikipedia.org/wiki/%D0%A7%D0%BB%D0%B5%D0%BD";
const qrCodeLevel = "H"; // error correction level "H"
const qrCodeRenderAs = "svg"; // render format "svg"
const qrCodeSize = 200;
const qrCodeBackground = "#43998b";
</script>

<style scoped lang="scss"></style>
