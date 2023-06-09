<template>
  <div class="input-wrapper">
    <label>{{ label }}</label>
    <input class="input" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
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

<style lang="scss">
.input-wrapper {
  box-sizing: border-box;
  position: relative;
  width: 100%;

  label {
    padding: 5px 2px;
    position: absolute;
    top: -13px;
    transform: translate(0, -50%);
    color: #6b978b;
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
    border: 1px solid #6b978b;
    border-radius: 8px;
    outline: none;
    color: 6b978b;
    font-weight: 400;
    font-size: 12px;
  }

  input::placeholder {
    color: #a0c4ba;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
