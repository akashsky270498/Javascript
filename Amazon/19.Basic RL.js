const users = Object.create(null); //Creating Object

const WINDOW_TIME = 60 * 1000; // 1 minute
const LIMIT = 5; // 5 req in 1 minute

function rateLimiter(ip) {
    const currentTime = Date.now();

    //allow if user doesn't exist
    if (!users[ip]) {
        users[ip] = {
            count: 1,
            startTime: currentTime
        }
        return "allowed";
    }

    const user = users[ip]; //fetching user data

    //Checking if user request within WINDOW_TIME
    if (currentTime - user.startTime > WINDOW_TIME) {
        user.count = 1;
        user.startTime = currentTime

        return "allowed";
    }

    //Checking the LIMIT
    if (user.count >= LIMIT) {
        return "Too many requests..";
    }

    //increasing the time
    user.count++;

    return "allowed";
}

//Testing
for (let i = 1; i < 7; i++) {
    console.log(rateLimiter("101"));
}