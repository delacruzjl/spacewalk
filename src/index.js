#!/usr/bin/env node

'use strict';
const program = require('commander');
let _ = require('lodash');

const ver = require('./app/helpers/version');
const doc = require('./app/helpers/genericEvaTask');
const actor = require('./app/helpers/actor');

const DEFAULT_FILE = `${__dirname}/main.yml`;
program
    .version(ver.currentVersion)
    .option('-i, --input [.yml]', 'specify the yml file to use', DEFAULT_FILE)
    .parse(process.argv);

if (program.input) {
    const yml = doc.genericEvaTask(program.input);
    console.log(`converted the YAML file [${program.input}]`);

    const actors = actor.actors(yml);
    console.log(`Getting actors array...`);

    //TODO: loop thru tasks and build the output
    let output = {
        actors: actors
    };
    _.forEach(_.get(yml, 'tasks'), (task) => {
        let path = _.get(task, 'file');
        if (!!path) {
            let fileTask = doc.genericEvaTask(`${__dirname}/${path}`);

            if (fileTask !== null) {
                output[_.split(path, '.')[0]] = fileTask;
            }
        }
    });
    console.log('result', output);
}