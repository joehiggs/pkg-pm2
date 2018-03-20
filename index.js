const commander = require('commander');
const shell = require('shelljs');
const fs = require('fs');

commander
  .version('0.1.0')
  .description('Pkg your Node.js app with PM2');


commander
    .command('build <serverName>')
    .description('Build binaries packaged with PM2')
    .action((serverName) => {
        console.log('Creating PM2 build file at start.js')
        fs.writeFile('start.js', (`var shell = require('shelljs');shell.exec("node ./node_modules/pm2/bin/pm2-runtime ` + serverName + ` -i max");`), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log('Pkg\'ing! Stay tuned....');
            shell.exec('pkg start.js');
        }); 
    });


commander.parse(process.argv);

