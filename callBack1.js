//Define higher order function
function getUserName(callback){
    const userName=prompt("enter your name: ");
        callback(userName);
}
function greeting(name){
    document.getElementById('demo').innerHTML=`<h1>${name}</h1>`
}

