var args = process.argv;

var fs = require('fs');
fs.readFile('sample.json', 'utf8', function(err, data){
  //console.log(data);
  const obj = JSON.parse(data);

console.log('USER.info :'+obj.USER[0].info.name.family);
});


// expected output: 42

//console.log(obj.result);

const { Command } = require('commander');
const program = new Command();
var args = process.argv;

console.log(args[6]);
var cnt = args[6];
program
    .option('-n, --name <name> \n', 'file name')
    .option('-c, --compress <compress>\n',  'mail name')
    
    .action(function(cnt){
        
        for(var i=0;i<cnt;i++){
            console.log('tt: %s',cnt);
        }

    })
    .parse(process.argv);

    console.log(program.opts().name);
    console.log(program.opts().compress);