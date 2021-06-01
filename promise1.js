let fs=require('fs');
function f(path){
    return new Promise(function executor(resolve, reject){
        fs.readFile(path, function(err, data){
            if(err) reject(err);
            else resolve(data);
        })
    })
}

function laterOp(data){
    console.log('data is received');
    console.log(data.toString());
}
let p1=f('f1.txt');
let p2=f('f2.txt');
let p3=f('f3.txt');

p1.then(laterOp);
p2.then(laterOp);
p3.then(laterOp);