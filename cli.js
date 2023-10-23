const program = require('commander');
const fs = require('fs');
const path = require('path');

program
    .version('1.0.0')
    .description('Генератор компонентів Vue 3');

program.command('generate <name>')
    .description('Генерувати новий компонент Vue 3')
    .action((name) => {
        if (!name) {
            console.error('Потрібно вказати назву компонента. Використовуйте опцію -c.');
            process.exit(1);
        }

        const componentName = name;
        const componentFileName = `${componentName}.vue`;
        const componentFilePath = path.join(__dirname, componentFileName); // Оновлений шлях

        if (fs.existsSync(componentFilePath)) {
            console.error(`Компонент з ім'ям ${componentName} вже існує.`);
            process.exit(1);
        }

        const exampleComponentContent = fs.readFileSync(path.join(__dirname, 'ExampleVueComponent.vue'), 'utf8');
        const componentContent = exampleComponentContent.replace(/\${componentName}/g, componentName);

        fs.writeFileSync(componentFilePath, componentContent);

        console.log(`Компонент ${componentName} був успішно створений у файлі ${componentFileName}.`);
    });

program.parse(process.argv);

// const projectQwe = [
//     <UiFormControl
//         label="Odin label"
//     >
//         <UiInput
//             placeholder="Some test"
//         />
//     </UiFormControl>
// ]
