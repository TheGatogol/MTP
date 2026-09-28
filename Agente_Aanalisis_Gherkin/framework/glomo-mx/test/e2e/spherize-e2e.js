var camelToKebab = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const ELEMENTS = require('./_spherica-components.json');

var updateProperties = (j, properties) => {
  const elementsPattern = new RegExp(`(${ELEMENTS.join('|')})(?=\\W|$)(?!-)`, 'g');
  const updatedProps = [];

  properties.forEach(prop => {
    if (typeof prop.value.value === 'string') {
      let newValue = prop.value.value;
      newValue = newValue.replace(elementsPattern, match => `${match}-spherica`);

      if (newValue !== prop.value.value) {
        updatedProps.push(j.property('init', prop.key, j.literal(newValue)));
      }
    } else if (prop.value.type === 'ObjectExpression') {
      const nestedProps = updateProperties(j, prop.value.properties);

      if (nestedProps.length > 0) {
        updatedProps.push(j.property('init', prop.key, j.objectExpression(nestedProps)));
      }
    } else if (prop.value.type === 'Identifier' && prop.key.name === 'ComponentClass') {
      const kebabName = camelToKebab(prop.value.name);
      if(elementsPattern.test(kebabName)) {
        const newIdentifier = `${prop.value.name}Spherica`;
        updatedProps.push(j.property('init', prop.key, j.identifier(newIdentifier)));
      }
    }
  });

  return updatedProps;
}

var updateElements = (root, j) => {
  root.find(j.ObjectExpression)
    .forEach(path => {
      path.node.properties.forEach(property => {
        if (property.key.name === 'elements') {
          const elements = path.node.properties.find(prop => prop.key.name === 'elements');
          if (elements) {
            // Remove elementsSpherica if exists
            const existingElementsSpherica = path.node.properties.findIndex(prop => prop.key.name === 'elementsSpherica');
            if (existingElementsSpherica > -1) {
              path.node.properties.splice(existingElementsSpherica, 1);
            }

            // Get elements index
            const elementsIndex = path.node.properties.indexOf(elements);
            const elementsSpherica = j.property('init', j.identifier('elementsSpherica'), j.objectExpression([]));

            // Update properties for elementsSpherica
            const elementsSphericaProps = updateProperties(j, elements.value.properties);

            if (elementsSphericaProps.length > 0) {
              elementsSpherica.value.properties.push(...elementsSphericaProps);
              
              // Insert elementsSpherica after elements
              path.node.properties.splice(elementsIndex + 1, 0, elementsSpherica);
            }
          }
        }
      });
    });
}

var updateImports = (root, j) => {
  root.find(j.ImportDeclaration)
  .forEach(path => {
    let importPath = path.node.source.value;
    ELEMENTS.forEach(element => {
      const regex = new RegExp(`(${element})(?=\\W|$)(?!-)`, 'g');
      if (regex.test(importPath)) {
        const newImportPath = importPath.replace(regex, match => `${match}-spherica`);
        const newImportSpecifiers = path.node.specifiers.map(specifier => {
          const newLocalName = `${specifier.local.name}Spherica`;
          // Add elementsSpherica to import specifiers
          root.find(j.ObjectExpression).forEach(objPath => {
            objPath.node.properties.forEach(property => {
              if (property.key.name === 'elements') {
                const elements = property.value.properties;
                const elementsSpherica = objPath.node.properties.find(prop => prop.key.name === 'elementsSpherica');
                
                // Verify if the element exists in elements
                if (elements.some(el => el.value.name === specifier.local.name)) {
                  if (!elementsSpherica) {
                    // Create elementsSpherica property
                    objPath.node.properties.push(
                      j.property('init', j.identifier('elementsSpherica'), j.objectExpression([]))
                    );
                  }

                  // Add element to elementsSpherica
                  const updatedElementsSpherica = objPath.node.properties.find(prop => prop.key.name === 'elementsSpherica');
                  const originalProperty = elements.find(el => el.value.name === specifier.local.name);
                  updatedElementsSpherica.value.properties.push(
                    j.property('init', j.identifier(originalProperty.key.name), j.identifier(newLocalName))
                  );
                }
              }
            });
          });

          return j.importDefaultSpecifier(j.identifier(newLocalName));
        });

        const newImport = j.importDeclaration(newImportSpecifiers, j.literal(newImportPath));
        const importIndex = root.get().node.program.body.indexOf(path.node);
        root.get().node.program.body.splice(importIndex + 1, 0, newImport);
      }
    });
  });
}

module.exports = function(fileInfo, api) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);
  
    updateElements(root, j);
    updateImports(root, j);

    return root.toSource({ quote: 'single' });
}
