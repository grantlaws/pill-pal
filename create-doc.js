const path = require('path');
const fs = require('fs');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');
const glob = require('glob');

const renderer = new ReactDocGenMarkdownRenderer(/* constructor options object */);

function main() {
  glob('components/**/*.js', (error, files) => {
    if (error) {
      console.log('Error occurred');
      console.log(error);
      return;
    }

    const srcFiles = files.filter(file => !file.includes('test'));

    srcFiles.forEach(file => {
      console.log(`Creating documentation for "${file}"`);
      const componentPath = path.resolve(path.join(__dirname, file));
      createDocForFile(componentPath);
    });
  });
}

function createDocForFile(componentPath) {
  fs.readFile(componentPath, (error, content) => {
    if (error) {
      console.log(`Error reading file ${componentPath}`);
      console.log(error);
    }

    const documentationPath = path.join(
      __dirname,
      'documentation',
      path.basename(componentPath, path.extname(componentPath)) +
        renderer.extension
    );
    const doc = reactDocgen.parse(content, null, null, {
      configFile: false,
    });

    fs.writeFile(
      documentationPath,
      renderer.render(
        /* The path to the component, used for linking to the file. */
        componentPath,
        /* The actual react-docgen AST */
        doc,
        /* Array of component ASTs that this component composes */
        []
      )
    );
  });
}

main();
