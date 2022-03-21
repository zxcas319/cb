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
        
        answer = answer.replace(/\?>/g,'');
        console.log('answer',answer);
        const answer_1split = answer.split(' ');

        console.log('1st',answer_1split);


      
        
       console.log('1st length',answer_1split.length );

        var arr = [];
        var temp_str ='';


        for (var i=1;i<answer_1split.length;i++){
            
            const answer1 =  answer_1split[i].split('.');
            console.log('2nd',answer1);
            temp_str ='';
            var temp_flag = 0;                
            const obj1 = JSON.parse(data, (key, value) => {
              
            if(key === answer1[answer1.length-1]){
               temp_flag = 1;              
//             if(value===undefined ){
//                               console.log('TEST');
//                if(key===addrs){
//                  temp_str += ' Address: ' + '? ?' +'\n';                         
//                }
               
//                else if(key==='family'){
//                   temp_str += 'Family' + ' name: ' + '?' +'\n';
//                }

//                else if(key==='given'){
//                   temp_str += 'Given' + ' name: ' + '?' +'\n';
//                }
             
//              }
            
             if(key==='family'){
                  temp_str += 'Family' + ' name: ' + value +'\n';
              }
            
              else if(key==='given'){
                    temp_str += 'Given' + ' name: ' + value +'\n';
              }
            
            else if (key==='addr1' ){
                
                temp_str += ' Address: ' + value +'\n';           
            }
     
            else if (key==='addr2'){
                 temp_str += 'Address: ' + value +'\n';                        
            }

             else{
              temp_str += key + ': ' + value+'\n';
             }

             arr.push(value);  
             }

            else if(answer1[answer1.length-1]==='addr1'){
                              temp_flag=0;              
             }
             else if(answer1[answer1.length-1]==='addr2'){
                              temp_flag=0;             
             }

             //return arr;   
             });
             console.log('temp_flag',temp_flag);
             if(temp_flag === 0 ){
               temp_str += 'Address: ' + '?' +'\n';
             }  
            console.log('dg',temp_str);
            var fs = require('fs');
            var filename = './file_list/' + answer1[answer1.length-1]+'.txt';

            var typedArray = new Uint16Array(arr);
            fs.writeFile(filename,temp_str,function(err)
            { 

              if (err === null)
               { 
                console.log('success'); 
               } 
               else 
               { 
                console.log('fail');
               }
             });                                                                     
        }

//         const obj1 = JSON.parse(data, (key, value) => {
          
            
//             if(key === answer1[answer1.length-1]){
//                 console.log('PPs',value[0]);
//                 if(key=== 'family' || key=== 'given' ){
//                     temp_str += key + ' name: ' + value +'\n';
//                 }

//                 else{
//                     temp_str += key + ': ' + value+'\n';
//                 }

//                 arr.push(value);  
//             }
//             //return arr;   
//           });
//           console.log('dg',temp_str);
//           var fs = require('fs');
//           var filename = './file_list/' + answer1[answer1.length-1]+'.txt';
          
//           var typedArray = new Uint16Array(arr);
//           fs.writeFile(filename,temp_str,function(err)
//           { 
//               if (err === null) 
//               { console.log('success'); 
              
//               } 
//               else 
//               { 
//                   console.log('fail'); 
//               }

//             });



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
