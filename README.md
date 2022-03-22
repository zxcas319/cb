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
      var fs = require('fs');
      const directory = fs.existsSync("./file_list");
      if(!directory){
      fs.mkdirSync('./file_list');
      }

    	console.log(answer);
        
        // < 기준으로  split하고, < 기준 split 배열을 .으로 split해서 시행
        
        answer = answer.replace(/\?>/g,'');
        
        const answer_1split = answer.split(' ');

        console.log('1st',answer_1split);

       // var arr = [];
        var temp_str ='';


       // for (var i=1;i<answer_1split.length;i++){
            
           // const answer1 =  answer_1split[i].split('.');
            //console.log('2nd',answer1);
            
            var temp_flag = 0;
            var temp_key = '';

            if(answer_1split[0]==='Name:'){
               temp_key = 'given family'; 
            }

            // else if(answer_1split[0]==='Given'){
            //   temp_key = 'given'; 
            // }
            else if(answer_1split[0]==='Address:'){
              temp_key = 'addr1 addr2'; 
            }
            else if(answer_1split[0]==='MemberShip:'){
              temp_key = 'grade id'; 
            }
            const temp_key_split =  temp_key.split(' ');
            console.log('temp_key',temp_key);

            const test = JSON.parse(data);
            var j=0;
            //console.log('testlength',test.length);
            for (var i=0;i<temp_key_split.length;i++){
              temp_str ='';
              j=0;
              for (j=0;j<test.length;j++){
                
                console.log('test김동규2',j,test[j],temp_key_split[i]);//.info.name.family);
                if(temp_key_split[i]=='family'){
                  //console.log('test김동규2',i,test[j],temp_key_split[i]);//.info.name.family);
                  if (test[j].info.name === undefined){
                   // console.log('undefined!!');
                    temp_str +=  'junk' +'\n';
                  }

                  else{
                    //console.log('test김동규',test[i].info.name.family);
                    temp_str +=  test[j].info.name.family +'\n';
                  }

                  var fs = require('fs');
                  var filename = './file_list/' + temp_key_split[i]+'.txt';
      
                 // var typedArray = new Uint16Array(arr);
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

                if(temp_key_split[i]=='given'){
                 //console.log('test[j].info.name',test[j]);
                  if (test[j].info.name === undefined){
                    console.log('undefined!!');
                    temp_str +=  'junk' +'\n';
                  }

                  else{
                    
                    temp_str +=  test[j].info.name.given +'\n';
                  }

                  var fs = require('fs');
                  var filename = './file_list/' + temp_key_split[i]+'.txt';
      
                 // var typedArray = new Uint16Array(arr);
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

                if(temp_key_split[i] === 'addr1'){
                   if (test[j].info.addrs[0] === undefined){
                     console.log('undefined!!addr1');
                     temp_str +=  'junk' +'\n';
                   }
 
                   else{
                     for(var k=0;k<test[j].info.addrs.length;k++){
                        temp_str +=  test[j].info.addrs[k].addr1 + ' ';
                     }
                     temp_str +='\n';
                   }

                   var fs = require('fs');
                  var filename = './file_list/' + temp_key_split[i]+'.txt';
      
                 // var typedArray = new Uint16Array(arr);
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
                if(temp_key_split[i] === 'addr2'){
                  if (test[j].info.addrs[0] === undefined){
                    console.log('undefined!!addr2박찬순');
                    temp_str +=  'junk' +'\n';console.log('undefined!!addr3',temp_str);
                  }

                  else{
                    for(var k=0;k<test[j].info.addrs.length;k++){
                       temp_str +=  test[j].info.addrs[k].addr2 + ' ';
                    }
                    temp_str +='\n';
                    var fs = require('fs');
                  var filename = './file_list/' + temp_key_split[i]+'.txt';
                  }
                 // var typedArray = new Uint16Array(arr);
                  fs.writeFile(filename,temp_str,function(err)
                  { 
      
                    if (err === null)
                     { 
                      console.log('success2'); 
                     } 
                     else 
                     { 
                      console.log('fail');
                     }
                   });
                   
                  
               }
               
               if(temp_key_split[i]=='grade'){
                  
                if (test[j].membership === undefined){
                  console.log('undefined!!');
                  temp_str +=  'junk' +'\n';
                }

                else{
                  
                  temp_str +=  test[j].membership.grade +'\n';
                }

                var fs = require('fs');
                var filename = './file_list/' + temp_key_split[i]+'.txt';
    
               // var typedArray = new Uint16Array(arr);
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

              if(temp_key_split[i]=='id'){
                  
                if (test[j].membership === undefined){
                  console.log('undefined!!');
                  temp_str +=  'junk' +'\n';
                }

                else{
                  
                  temp_str +=  test[j].membership.id +'\n';
                }

                var fs = require('fs');
                var filename = './file_list/' + temp_key_split[i]+'.txt';
    
               // var typedArray = new Uint16Array(arr);
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


                
                }
              
            }

          
        rl.question('다음 데이터 입력 (엔터시 입력 종료) \n', answerCallback);

    }
    
    else if(answer ==  '') {

        console.log(answer);
        var fs = require('fs');
        fs.readdir('./file_list',function(err,filelist)
        { 
            console.log(filelist);
            for(var i=0;i<filelist.length;i++){
              if(filelist[i].toString() !== 'output.txt'){  
              fs.readFile('./file_list/'+ filelist[i].toString(), 'utf8', function(err, data){
               // console.log(data);
               

              });
              }
            }
        });
       
        var exist_check;
        var array_family=false,array_given=false,array_addr1=false,array_addr2=false,array_grade=false,array_id=false;

        exist_check = fs.existsSync('./file_list/family.txt');
        
        if(exist_check){
          array_family = fs.readFileSync('./file_list/family.txt').toString().split("\n");
        }

        exist_check = fs.existsSync('./file_list/given.txt');

        if(exist_check){
          array_given = fs.readFileSync('./file_list/given.txt').toString().split("\n");
        }
        
        exist_check = fs.existsSync('./file_list/addr1.txt');
        if(exist_check){
          array_addr1 = fs.readFileSync('./file_list/addr1.txt').toString().split("\n");
        }
        
        exist_check = fs.existsSync('./file_list/addr2.txt');
        if(exist_check){
          array_addr2 = fs.readFileSync('./file_list/addr2.txt').toString().split("\n");
        }

        exist_check = fs.existsSync('./file_list/grade.txt');
        if(exist_check){
          array_grade = fs.readFileSync('./file_list/grade.txt').toString().split("\n");
        }

        exist_check = fs.existsSync('./file_list/id.txt');
        if(exist_check){
          array_id = fs.readFileSync('./file_list/id.txt').toString().split("\n");
        }
        
        var output_str = '';

        for(var j=0;j<array_family.length;j++) {
          console.log('ffff',array_family[j]);
          console.log('ffff',array_family);
          if(array_family[j] !== '' ){
          output_str += 'Name: '+ array_given[j] + ' ' + array_family[j] + '\n';
          }

          if(array_addr1 && array_addr1[j]!=='' && array_addr1[j] !== 'junk'){
          var temp_arr1 = array_addr1[j].split(' ');
          
          var temp_arr2 = array_addr2[j].split(' ');
          console.log('ff',temp_arr1);
           for(var k=0;k<array_addr1[j].length;k++){
              if(temp_arr1[k] !== '' && temp_arr1[k] !==undefined){
              output_str += 'Address: '+temp_arr1[k] + ' ' + temp_arr2[k] + '\n';
           }
          }
          }

           if(array_grade){
           output_str += 'MemberShip: '+ array_grade[j] + ' ' + array_id[j] + '\n';
           }
           output_str += '\n';
          }     

        var filename = './output.txt';

        fs.writeFile(filename,output_str,function(err)
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
         

        
        //console.log('출력 output.txt...',ouput.txt);


        var output = fs.readFileSync('./output.txt').toString().split("\n")
        for(i in output){
          console.log(output[i])
        }

        fs.rmdir("./file_list",{ recursive: true }, err => {
          console.log("err : ", err);
      })
        

        rl.close();
        
        

    }
    
};

rl.question('데이터 입력 \n', answerCallback);

});
