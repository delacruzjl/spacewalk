let yaml = require('js-yaml');
let fs = require('fs');
let _ = require('lodash');
let program = require('commander');
let exp = require('./exports');

// Run npm start to run this function
function startUp() {
    // This loads the specified yaml file and prints it out via console.

    let actors;
    let files;

    let doc = yaml.safeLoad(fs.readFileSync('../main.yml', 'utf8'));
    actors = _.get(doc, 'actors');
    console.log(actors);
    files = _.get(doc, 'tasks');

    _.forEach(files, (file) => {
        (_.get(file, 'file') && !_.get(file, 'repo')) ? console.log("Internal file"): console.log("External file");
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
    return doc;
};

// to run this command, in the console run node main.js -e or --export. This will only work if it's ran soley by itself.
// We need to talk about how to refactor the code to make more sense.
program.version('0.0.1', '-v, --version').option('-e, --export [type]', 'Export yaml to specified file type', /^(html|doc|docx)$/i, 'html').action(() => {
    let fileLocation = process.argv[process.argv.length - 1]
    switch (program.export) {
        case 'html':
            exp.html(startUp(), fileLocation);
            break;
        case 'docx':
        case 'doc':
            exp.doc(startUp(), fileLocation);
            break;
        default:
            break;
    }
}).parse(process.argv);

exports.startUp = startUp;