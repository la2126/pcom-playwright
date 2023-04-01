module.exports = function (plop) {
    // controller generator
    plop.setGenerator('story', {
        description: 'Add Story',
        prompts: [{
            type: 'list',
            name: 'type',
            message: 'Component Type',
            choices: ["atom", "component", "page", "material"]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Component Name'
        }],
        actions: [{
            type: 'add',
            path: 'src/stories/{{type}}s/{{name}}/{{name}}.tsx',
            templateFile: 'plop-templates/Component.tsx.hbs'
        },
        {
            type: 'add',
            path: 'src/stories/{{type}}s/{{name}}/{{name}}.stories.tsx',
            templateFile: 'plop-templates/Component.stories.tsx.hbs'
        },
        {
            type: 'add',
            path: 'src/stories/{{type}}s/{{name}}/{{name}}.scss',
            templateFile: 'plop-templates/Component.scss.hbs'
        }]
    });

 
};