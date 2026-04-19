class RateLimiter {
    constructor({ capacity, refillRate }) {
        // Validate input early (fail-fast principle)
        if (capacity <= 0 || refillRate <= 0) {
            throw new Error("Invalid configuration: capacity and refillRate must be > 0");
        }

        // Maximum tokens bucket can hold (burst capacity)
        this.capacity = capacity;

        // Current available tokens (start full → allows initial burst)
        this.tokens = capacity;

        // Tokens added per second
        this.refillRate = refillRate;

        // Last time tokens were refilled (in ms)
        this.lastRefill = Date.now();
    }

    /**
     * Refill tokens based on time elapsed
     * This ensures rate limiting is time-based, not request-based
     */
    refillTokens(now) {
        // Time passed since last refill (convert ms → seconds)
        const elapsedTime = (now - this.lastRefill) / 1000;
        console.log("ET:", elapsedTime);
        // Calculate how many whole tokens to add (avoid floating precision issues)
        const tokensToAdd = Math.floor(elapsedTime * this.refillRate);
        console.log("tokensToAdd:", tokensToAdd);
        // Only update if at least 1 token can be added
        if (tokensToAdd > 0) {
            // Add tokens but do not exceed capacity
            this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);

            /**
             * Move lastRefill forward ONLY by the time consumed to generate tokens
             * This prevents "time drift" bugs in long-running systems
             */
            this.lastRefill += (tokensToAdd / this.refillRate) * 1000;
        }
    }

    /**
     * Main API to check if request is allowed
     */
    allowRequest() {
        const now = Date.now();

        // Step 1: Refill tokens before processing request
        this.refillTokens(now);

        // Step 2: Check if at least 1 token is available
        if (this.tokens > 0) {
            // Consume 1 token per request
            this.tokens--;

            // Request allowed
            return true;
        }

        // No tokens → request should be throttled
        return false;
    }
}


// Example usage:

// capacity = 2 → allows burst of 2 requests
// refillRate = 1 → adds 1 token per second
let rl = new RateLimiter({ capacity: 2, refillRate: 1 });

console.log(rl.allowRequest()); // true (tokens: 1 left)
console.log(rl.allowRequest()); // true (tokens: 0 left)
console.log(rl.allowRequest()); // false (rate limited)

// // After ~1 second, 1 token will be refilled
setTimeout(() => {
    console.log("--- After 1 second wait ---");
    console.log(rl.allowRequest()); // true
}, 1100);