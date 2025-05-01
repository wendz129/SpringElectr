//Promises - Just just the Basic Facts
//wrappers for anything async 
//ajax calls, reading files, timeouts, geolocation, talk to a database, or anything that would use a callback function 
//use them to get rid of callback hell
//fetch() returns a Promise. 

var results = multiplyTwoNumbers(5, 10);
console.log(result); //50

var photo = downloadPhoto('http://localhost/cat.jpg'); 
    photo would be 'undefined'

    const rand = () => Math.floor(Math.random() * 10) + 1;

    let p1 = new Promise((resolve, reject) => {
        let x = 5;
        //resolve(x);  // calling this will call then()

    })

    p1.then(() => {
        console.log(ex);
        return ex;
    }).then( (x) => {
        console.log(x);
    }).catch( (exx) => {
        console.log('caught', exx);
    })