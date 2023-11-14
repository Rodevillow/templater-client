const program = require('commander');
const fs = require('fs');
const path = require('path');

program
    .version('1.0.0')
    .description('Vue 3 components generator');

program.command('generate <name>')
    .description('Generating new component Vue 3')
    .action((name) => {
        if (!name) {
            console.error('To set component name. Use option -c.');
            process.exit(1);
        }

        const componentName = name;
        const componentFileName = `./components/ui/${componentName}.vue`;
        const componentFilePath = path.join(__dirname, componentFileName);

        if (fs.existsSync(componentFilePath)) {
            console.error(`The component ${componentName} is exist.`);
            process.exit(1);
        }

        const exampleComponentContent = fs.readFileSync(path.join(__dirname, 'ExampleVueComponent.vue'), 'utf8');
        const componentContent = exampleComponentContent.replace(/\${componentName}/g, componentName);

        fs.writeFileSync(componentFilePath, componentContent);

        console.log(`The component ${componentName} was successfully created by path ${componentFileName}.`);
    });

program.parse(process.argv);