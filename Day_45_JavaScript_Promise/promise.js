// Promise has 4 stage

// 1. Pending Stage
// 2. Fullfilled -> resolve -> .then()
// 3. Reject -> reject -> .catch()

let gourav = 100;
let ashish = 1000;

const p = new Promise((resolve, reject) =>{
    let rupees = gourav - ashish
    if(ashish > rupees){
        // resolve("thik hain me de dunga")
        resolve({rupees, data : "Bhai me tere Liye humesha khada hu"})
    }
    else{
        reject("this is my Backup plan")
    }
});

p.then((msg) => console.log(msg.data)).catch((msg) =>console.log(msg));