const widdershins = require('widdershins');

const options = {
  language_tabs: [{ shell: "cURL" }, { php: "PHP" }]
};

const fs = require('fs');
const fileData = fs.readFileSync('openapi.yaml', 'utf8');
const swaggerFile = fileData;

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
