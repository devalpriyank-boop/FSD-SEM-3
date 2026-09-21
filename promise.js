/*const promise1 = new Promise((resolve , reject)=>{
    let success = true
    if(success){
        resolve({
            id:2503203100091,
            username: "Priyank"
        })

    }else{
        reject(new Error("Data not fetched"))
    }
})
promise1
.then((response)=>{
    console.log(response);

})
.catch((error)=>{
    console.log(error);
})



function promise2(id, username, email, location) {
    return new Promise((resolve, reject) => {
        if (id && username && email && location) {
            resolve({
                id,
                username,
                email,
                location
            });
        } else {
            reject("All fields are required!");
        }
    });
}

// Usage
promise2(2503203100091, "Priyank", "priyank@example.com", "Ghaziabad")
    .then(user => {
        console.log("ID:", user.id);
        console.log("Username:", user.username);
        console.log("Email:", user.email);
        console.log("Location:", user.location);
    })
    .catch(error => {
        console.error(error);
    });*/

    const promise1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve({
            id: 2503203100091,
            username: "Priyank"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

function promise2(id, username, email, location) {
    return new Promise((resolve, reject) => {
        if (id && username && email && location) {
            resolve({
                id,
                username,
                email,
                location
            });
        } else {
            reject(new Error("All fields are required!"));
        }
    });
}

promise1
    .then((response) => {
        console.log("Promise1 Data:", response);

        // Pass data from promise1 to promise2
        return promise2(
            response.id,
            response.username,
            "priyank@example.com",
            "Ghaziabad"
        );
    })
    .then((user) => {
        console.log("Promise2 Data:");
        console.log("ID:", user.id);
        console.log("Username:", user.username);
        console.log("Email:", user.email);
        console.log("Location:", user.location);
    })
    .catch((error) => {
        console.log(error);
    });


