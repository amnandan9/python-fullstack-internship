//! PROMISE SYNTAX

new Promise((resolve, reject) => {
    resolve("Promise resolved");
    // reject("Promise rejected"); ❌ Don't call both
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("I am finally");
});


//! CUSTOM PROMISE

let p1 = new Promise((resolve, reject) => {
    let isRoomClean = false;

    if (isRoomClean) {
        resolve("Room is clean");
    } else {
        reject("Room is not clean");
    }
});

p1.then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
});


//! PROMISE STATIC METHODS

let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st promise resolved");
        // reject("1st promise rejected"); ❌ only one
    }, 7000);
});

let pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2nd promise resolved");
    }, 3000);
});

let pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3rd promise resolved");
    }, 4000);
});

let pr4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("4th promise resolved");
    }, 2500);
});

// Promise.race → fastest one wins
Promise.race([pr1, pr2, pr3, pr4])
.then((res) => {
    console.log("Race:", res);
})
.catch((err) => {
    console.log(err);
});

// Promise.all → waits for all
Promise.all([pr1, pr2, pr3, pr4])
.then((res) => {
    console.log("All:", res);
})
.catch((err) => {
    console.log(err);
});


//! FETCH API (GitHub Users)

fetch('https://api.github.com/users')
.then((res) => res.json())   // ✅ correct way
.then((data) => {
    console.log(data);
    data.map((user) => {
        console.log(user.login);  // name नहीं, login होता है
    });
})
.catch((err) => {
    console.log(err);
});


//! FETCH API (Products)

fetch('https://api.escuelajs.co/api/v1/products')
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.map((product) => {
        console.log(product.title);
    });
})
.catch((err) => {
    console.log(err);
});


//! ASYNC / AWAIT

async function fetchUsers() {
    try {
        let usersData = await fetch('https://api.github.com/users');
        let data = await usersData.json();

        console.log(data);

        data.map((user) => {
            console.log(user.login);  // ✅ correct field
        });

    } catch (error) {
        console.log(error);
    }
}

fetchUsers();


//! MATH METHODS

console.log(Math.PI);

let num = 10.56;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.max(10, 5, 15, 25, 18, 60));
console.log(Math.min(10, 5, 15, 25, 18, 60));
console.log(Math.sqrt(49));
console.log(Math.cbrt(8));
console.log(Math.floor(Math.random() * 100));


//! DATE METHODS

let date = new Date();

console.log(date);
console.log(date.getDate());        // day of month
console.log(date.getDay());         // 0 = Sunday
console.log(date.getFullYear());
console.log(date.getMonth());       // 0 = Jan
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());