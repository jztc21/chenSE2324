let promiseToCleanRoom=new Promise((resolve, reject)=>{

//part 1 what promise must do

    let isClean=true;
    //part 2 execute promise
if(isClean){
    resolve('clean');//passed to .then()


}else{
    reject('not clean'); //passed to .catch()

}
})

//part 3 call .then or .catch
promiseToCleanRoom.then((fromResolve)=>{
    console.log(`The room is ${fromResolve}.`)
}).catch((fromReject)=>{
    console.log(`The room is ${fromReject}`)
});

