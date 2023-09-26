export const codeExampleButtons = `
<UiInput type="text" placeholder="Simple input..."/>

<UiFormControl label="Label for input">
  <UiInput type="text" placeholder="Input with label..." />
</UiFormControl>

<UiFormControl label="Label for input with errors" :errors="['Test error message']">
    <UiInput type="text" placeholder="Input with errors..." :is-dirty="true" :is-invalid="true" />
</UiFormControl>
`;

export default codeExampleButtons;