const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var fs = require('fs');
fs.readFile('sample.json', 'utf8', function(err, data){
  //console.log(data);
 


  const answerCallback = (answer) => {
  
   
    if (answer !== '') {
    	console.log(answer);
        
        // < 기준으로  split하고, < 기준 split 배열을 .으로 split해서 시행
        
        answer = answer.replace('?','');

        const answer_1split = answer.split('>');

        for(var v in answer_1split){
            if(v==='') break;
            console.log('pp',v);
        }


        const answer1 =  answer.split('.');
        console.log('2nd',answer1);
        


        var arr = [];
        var temp_str ='';
        const obj1 = JSON.parse(data, (key, value) => {
          
            
            if(key === answer1[answer1.length-1]){
                console.log('PPs',value[0]);
                if(key=== 'family' || key=== 'given' ){
                    temp_str += key + ' name: ' + value +'\n';
                }

                else{
                    temp_str += key + ': ' + value+'\n';
                }

                arr.push(value);  
            }
            //return arr;   
          });
          console.log('dg',temp_str);
          var fs = require('fs');
          var filename = './file_list/' + answer1[answer1.length-1]+'.txt';
          
          var typedArray = new Uint16Array(arr);
          fs.writeFile(filename,temp_str,function(err)
          { 
              if (err === null) 
              { console.log('success'); 
              
              } 
              else 
              { 
                  console.log('fail'); 
              }

            });



        rl.question('다음 데이터 입력 (엔터시 입력 종료) \n', answerCallback);

    }
    
    else if(answer ==  '') {

        console.log(answer);
        var fs = require('fs');
        fs.readdir('./file_list',function(err,filelist)
        { 
            console.log(filelist);
        });
    	
        // var filename = './file_list' + filelist[0];

        // fs.readFile(filename,'utf8',function(err,data)
        // {
        //      console.log(data); 
        // });

        
        console.log('출력 output.txt...');
        

        rl.close();
        
        

    }
    
};

rl.question('데이터 입력 \n', answerCallback);

});


