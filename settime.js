console.log("Start")
setTimeout(()=>{
    console.log("SetTime Out")   
}, 1000)
Promise.resolve().then(()=>{
    console.log("Promise")
})
console.log("END")    