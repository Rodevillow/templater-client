<template>
  <div>
    <div class="code-container">
      <span class="code-do-copy-btn" @click="handleDoCopy">
        <UiIconCopy v-if="!copyWasTriggered" />
        <UiIconCheckInSquare v-if="copyWasTriggered" />
      </span>
      <div class="line-numbers">
        <span v-for="(line, index) in codeLines" :key="index">{{ index + 1 }}</span>
      </div>
      <div class="code-content">
        <pre><code class="language-html">{{ props.codeExample.trim() }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import UiIconCopy from "~/components/ui/UiIconCopy.vue";
import UiIconCheckInSquare from "~/components/ui/UiIconCheckInSquare.vue"

const props = defineProps({
  codeExample: {
    type: String,
    required: true
  }
})

const copyWasTriggered = ref(false)
const codeLines = props.codeExample.trim().split('\n')

const copyTextToClipboard = (textToCopy = '') => {
  copyWasTriggered.value = true;
  let textarea = document.createElement("textarea")
  textarea.value = textToCopy
  document.body.appendChild(textarea)
  textarea.select()
  let successful = document.execCommand('copy')
  textarea.blur()
  document.body.removeChild(textarea)
  if (successful) {
    setTimeout(() => copyWasTriggered.value = false, 1000)
  } else {
    alert('Oops something went wrong with copying. =(')
  }
}

const handleDoCopy = () => copyTextToClipboard(props.codeExample);

onMounted(() => Prism.highlightAll())
</script>

<style lang="scss" scoped>
.code-do-copy-btn {
  background-color: #f5f2f0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 10px;
  cursor: pointer;
  transition: 1s;
  box-shadow: -3px 3px 2px -4px;
  user-select: none;

  &:hover {
    background-color: #e7e2e1;
    transition: 1s;
  }

  &:active {
    background-color: #dededc;
    transition: 1s;
  }
}

.code-container {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.line-numbers {
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
  text-align: right;
}

.line-numbers span {
  height: 24px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:nth-child(odd) {
    background-color: #d5d5d8;
  }

  &:nth-child(even) {
    background-color: #e0e0e1;
  }
}

.code-content {
  flex-grow: 1;
  overflow-x: scroll;
  width: 100%;
}

pre, code {
  width: 100%;
}

.my-code-line {
  background-color: gainsboro;
  box-sizing: border-box;

  code {
    height: 24px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border-radius: 0;

    &.language-html {
      background-color: transparent;
      text-shadow: none;
      box-sizing: border-box;
    }
  }
}

.even-line {
  background-color: #e0e0e1;
}

.odd-line {
  background-color: #d5d5d8;
}

code[class*="language-"] {
  line-height: 20px;
}

pre[class*="language-"] {
  padding: 0;
  margin: 0;
  text-shadow: none;
}
</style>