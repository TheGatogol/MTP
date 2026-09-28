#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function sortKeysRecursive(obj) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }
  return Object.keys(obj).sort().reduce((sorted, key) => {
    sorted[key] = sortKeysRecursive(obj[key]);
    return sorted;
  }, {});
}

function formatJsonFile(filePath) {
  try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const formatted = JSON.stringify(sortKeysRecursive(json), null, 2) + '\n';
    fs.writeFileSync(filePath, formatted, 'utf8');
    console.log(`Formatted ${path.relative(process.cwd(), filePath)}`);
  } catch (error) {
    console.error(`Error formatting ${filePath}: ${error.message}`);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node scripts/format-json.js <file1.json> ...');
  process.exit(1);
}

args.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  formatJsonFile(filePath);
});

console.log(`\nFormatted ${args.length} file(s)`);
