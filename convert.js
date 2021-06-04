const widdershins = require('widdershins');
const yaml = require('yaml');

const options = {
    search: false,
    tocSummary: true,
    language_tabs: [{ shell: "cURL" }, { php: "PHP" }],
    codeSamples: true,
    includes: ['errors.md'],
    toc_footers: [
        {
            url: 'https://spinupwp.com/docs',
            description: 'SpinupWP Documentation',
        },
    ],
    user_templates: 'templates',
    templateCallback: function(templateName, stage, data) {
        // stage pre, post
        return data;
    }
};

const fs = require('fs');
const fileData = fs.readFileSync('openapi.yaml', 'utf8');
const swaggerFile = yaml.parse(fileData);

widdershins.convert(swaggerFile, options)
.then(markdownOutput => {
  // markdownOutput contains the converted markdown
  fs.writeFileSync('index.md', markdownOutput, 'utf8');
  console.log('Converted file saved to "index.md".');
})
.catch(err => {
  // handle errors
  console.log('Error converting OpenAPI file.');
  console.log(err);
});
