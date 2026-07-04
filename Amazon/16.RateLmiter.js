const users = Object.create(null);

const CAPACITY = 5;
const REFILL_RATE = 1;

function rateLimiter(ip) {
    const currentTime = Date.now();

    if (!users[ip]) {
        users[ip] = {
            tokens: CAPACITY,
            lastRefill: currentTime
        }
    }

    const user = users[ip];

    const elapsedTime = (currentTime - user.lastRefill) / 1000;
    const tokensToAdd = elapsedTime * REFILL_RATE;
    user.tokens = Math.min(CAPACITY, user.tokens + tokensToAdd);
    user.lastRefill = currentTime;

    if (user.tokens < 1) {
        return "Too many requests...";
    }

    user.tokens -= 1;

    return "allowed";
}

for (let i = 0; i < 7; i++) {
    console.log(rateLimiter("101"))
}