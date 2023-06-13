<template>
  <div class="input-wrapper">
    <label>{{ label }}</label>
    <input class="input" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },

    label: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/variables";

.input-wrapper {
  box-sizing: border-box;
  position: relative;
  width: 100%;

  label {
    padding: 5px 2px;
    position: absolute;
    top: -13px;
    transform: translate(0, -50%);
    color: $text-color;
    background-color: transparent;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  .input {
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 15px;
    background-color: transparent;
    border: 1px solid $text-color;
    border-radius: 8px;
    outline: none;
    color: $disabled-color;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
  }

  input::placeholder {
    color: $disabled-color;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0em;
  }
}
</style>
