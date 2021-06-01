let fs=require('fs');
let p=new Promise(function executor(resolve, reject){
    fs.readFile('f1.txt', function(err, data){
        if(err) reject(err);
        else resolve(data);
    })
})

p.then(function(data){
    console.log("data is received");
    console.log(data.toString());
})