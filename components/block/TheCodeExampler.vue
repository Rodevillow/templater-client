<template>
  <div>
    <div class="code-container">
      <span class="code-do-copy-btn" @click="handleDoCopy">Do copy</span>
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
import docsButtons from "~/pages/docs/composables/DocsButtons";

const props = defineProps({
  codeExample: {
    type: String,
    required: true
  }
})

const codeLines = props.codeExample.trim().split('\n')

const copyTextToClipboard = (textToCopy = '') => {
  let textarea = document.createElement("textarea")
  textarea.value = textToCopy
  document.body.appendChild(textarea)
  textarea.select()
  let successful = document.execCommand('copy')
  textarea.blur()
  document.body.removeChild(textarea)
  return successful
}

const handleDoCopy = () => copyTextToClipboard(props.codeExample)
    ? alert("Copying was successfully!")
    : alert("Copying was failed!");

onMounted(() => Prism.highlightAll())
</script>

<style lang="scss" scoped>

.code-do-copy-btn {
  border: 1px solid #48494e;
  background-color: #f5f2f0;
  position: absolute;
  right: 0;
  top: -15px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .1s;

  &:hover {
    background-color: #e7e2e1;
    transition: .1s;
  }

  &:active {
    background-color: #dededc;
    transition: .1s;
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

  &:nth-child(odd) {
    background-color: #d5d5d8;
  }

  &:nth-child(even) {
    background-color: #e0e0e1;
  }
}

.code-content {
  flex-grow: 1;
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
}
</style>