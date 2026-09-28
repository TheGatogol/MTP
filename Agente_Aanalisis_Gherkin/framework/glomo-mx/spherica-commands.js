const path = require('path');
const fs = require('fs');
const [ command, param ] = process.argv.slice(2);

const getCountry = () => {
    const allowedCountries = ['uy', 'pe', 'ar', 'co', 'mx', 've'];
    const fullPath = path.resolve('./app/config');
    const items = fs.readdirSync(fullPath);

    for (const item of items) {
        const itemPath = path.join(fullPath, item);
        if (fs.statSync(itemPath).isDirectory() && allowedCountries.includes(item)) {
          return item;
        }
    }
    return null;
}

const compareMajorVersions = (version1, version2) => {
    const getMajor = version => parseInt(version.replace(/^[^\d]*(\d+).*/, '$1'), 10);
    
    const major1 = getMajor(version1);
    const major2 = getMajor(version2);

    return Math.sign(major1 - major2);
}

const checkCatalogDependencies = () => {
    const sphericaCatalogComponents = require(`./app/config/${getCountry()}/base/_spherica-catalog-components.json`);
    const packageDependencies = require('./package.json').dependencies;
    const incorrectPackages = [];

    for(const component of Object.keys(sphericaCatalogComponents)) {
      if(packageDependencies[component]) {
        const versionIncorrect = compareMajorVersions(packageDependencies[component], sphericaCatalogComponents[component]?.spherica?.min) >= 0;
        if(versionIncorrect) {
          incorrectPackages.push(component);
        }
      }
    }

    if(incorrectPackages.length > 0) {
      console.log('Incorrect packages:\n', incorrectPackages.join('\n\t'));
    }

    return incorrectPackages.length == 0;
  }

  const updateCatalogDependenciesToSpherica = () => {
    const sphericaCatalogComponents = require(`./app/config/${getCountry()}/base/_spherica-catalog-components.json`);
    const packageDependencies = require('./package.json');

    Object.keys(sphericaCatalogComponents).forEach(component => {
      if(packageDependencies.dependencies[component]) {
        packageDependencies.dependencies[component] = sphericaCatalogComponents[component]?.spherica?.current || packageDependencies.dependencies[component];
      }
    });

    fs.writeFileSync('./package.json', JSON.stringify(packageDependencies, null, 4));
  }

  const updateCatalogDependenciesToNoSpherica = () => {
    const sphericaCatalogComponents = require(`./app/config/${getCountry()}/base/_spherica-catalog-components.json`);
    const packageDependencies = require('./package.json');

    Object.keys(sphericaCatalogComponents).forEach(component => {
      if(packageDependencies.dependencies[component]) {
        packageDependencies.dependencies[component] = sphericaCatalogComponents[component]?.['no-spherica']?.current || packageDependencies.dependencies[component];
      }
    });

    fs.writeFileSync('./package.json', JSON.stringify(packageDependencies, null, 4));
  }
  
  const listComponents = (pageName) => {
    const pageFileName = `./dist/composerMocks/${pageName}.json`;

    try {
      const page = fs.readFileSync(pageFileName);
      JSON.parse(page).components.forEach(component => {
        console.log(component.familyPath || component.tag);
      });
    } catch(e) {
      console.log(`No existe la ruta ${pageFileName}`);
    }
  }

switch (command) {
    case 'list-page-components':
        listComponents(param);
        break;
    case 'check-catalog-dep':
        const areValidDependencies = checkCatalogDependencies();
        process.exit(!areValidDependencies)
        break;
    case 'update-catalog-dep-to-spherica':
        updateCatalogDependenciesToSpherica();
        break;
    case 'update-catalog-dep-to-no-spherica':
        updateCatalogDependenciesToNoSpherica();
        break;
    default:
        console.log('Command not found');
        break;
}