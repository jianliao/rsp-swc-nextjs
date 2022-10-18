const glob = require('glob');
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');

const generateStaticImport = () => {
  return `
import { createComponent } from '@lit-labs/react';
import * as React from 'react';`;
};

const generateImport = (iconDisplayName, iconDisplayFileName, iconElementName) => {
  return `
import { ${iconDisplayName} } from '@spectrum-web-components/icons-workflow/src/elements/${iconDisplayFileName}.js';
import '@spectrum-web-components/icons-workflow/icons/${iconElementName}.js';`;
};

const generateBody = (iconDisplayName, iconElementName) => {
  return `
export const Sp${iconDisplayName} = createComponent(React, '${iconElementName}', ${iconDisplayName}, {}, 'Sp${iconDisplayName}');`;
};

const generate = async () => {
  glob(
    path.resolve(__dirname, '..', 'node_modules/@spectrum-web-components/icons-workflow/icons/**.js'),
    (error, icons) => {
      let fileContent = generateStaticImport();
      for (icon of icons) {
        const content = readFileSync(icon).toString().split(';')[0];
        const displayName = content.substring(content.indexOf('{') + 1, content.indexOf(' '));
        const displayFileName = content.substring(content.lastIndexOf('/') + 1, content.length - 4);
        const elementName = path.parse(icon).name;

        fileContent = fileContent.concat(generateImport(displayName, displayFileName, elementName));
        fileContent = fileContent.concat(generateBody(displayName, elementName));
      }
      writeFileSync(path.resolve(__dirname, '..', 'components/swc/WorkflowIcons.tsx'), fileContent);
    }
  );
};

(() => {
  generate();
})();
