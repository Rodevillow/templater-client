export const codeExampleAccordion = `
<UiAccordion 
    :data="[
    {
        isActive: false,
        title: 'Some test title 1',
        description: 'Some test description 1',
      },
      {
        isActive: false,
        title: 'Some test title 2',
        description: 'Some test description 2',
      },
      {
        isActive: false,
        title: 'Some test title 3',
        description: 'Some test description 3',
      },
    ]"
    @change="handleAccordionChange" 
/>
`

export default codeExampleAccordion
