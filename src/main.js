let yaml = require('js-yaml');
let fs = require('fs');

// This loads the specified yaml file and prints it out via console.
let doc = yaml.safeLoad(fs.readFileSync('../pma3-shields-and-connections.yml', 'utf8'));
console.log(JSON.stringify(doc));