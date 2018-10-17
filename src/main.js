let yaml = require('js-yaml');
let fs = require('fs');
let _ = require('lodash');
let program = require('commander');

// Run npm start to run this function
exports.startUp = function () {
    // This loads the specified yaml file and prints it out via console.

    let actors;
    let files;

    let doc = yaml.safeLoad(fs.readFileSync('./../main.yml', 'utf8'));
    actors = _.get(doc, 'actors');
    console.log(actors);
    files = _.get(doc, 'tasks');

    _.forEach(files, (file) => {
        (_.get(file, 'file') && !_.get(file, 'repo')) ? console.log("Internal file") : console.log("External file");
        if (_.get(file, 'file') && !_.get(file, 'repo')) {
            if (_.get(file, 'actors')) {
                console.log("File: " + file.file + " actor: " + file.actors);
            } else {
                console.log("File with no specified actors: " + file.file);
            }
        } else if (_.get(file, 'repo')) {
            console.log("Repo: " + file.repo + " version: " + file.version + " file: " + file.file + " actors: " + file.actors + " vars: " + JSON.stringify(file.vars));
        }
    });
};

// exports.command = function() {
    // to run this command, in the console run node main.js -e or --export. Thsi will only work if it's ran soley by itself.
    // We need to talk about how to refactor the code to make more sense.
    program.version('0.0.1').option('-e, --export', 'Export as Word Document').parse(process.argv);

    console.log("You selected: ");
    if (program.export) console.log(" - export");
    else console.log("Error - not a valid option.");
// };