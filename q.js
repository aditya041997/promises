let promise = new Promise(function(resolve, reject) {
    reject("Rejected");
});

promise.catch(function(err){
    console.log(err);
})