const users = Object.create(null);
const WINDOW_TIME = 60 * 1000;
const LIMIT = 5;

function rateLimiter(ip) {
    const currentTime = Date.now();

    if (!users[ip]) {
        users[ip] = [];
    }

    //Keep only requests within last 60 seconds
    users[ip] = users[ip].filter((timestamp) => currentTime - timestamp < WINDOW_TIME);

    //Check limit
    if (users[ip].length >= LIMIT) {
        return "Too many requests..";
    }

    users[ip].push(currentTime);
    console.log(users);

    return "allowed";
}

//Testing
for (let i = 0; i < 6; i++) {
    console.log(rateLimiter("101"));
}