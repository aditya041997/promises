let fs=require('fs');
function f(path){
    return new Promise(function executor(resolve, reject){
        console.log(3);
        fs.readFile(path, function(err, data){
            if(err) reject(err);
            else resolve(data);
        })
    })
}
console.log(1);
let p1=f('f1.txt');

p1.then(function(data){
    console.log(data+" ");
    let p2=f('f2.txt');
    return p2;
}).then(function(data){
    console.log(data+" ");
    let p3=f('f3.txt');
    return p3;
}).then(function(data){
    console.log(data+" ");
})

console.log(2);