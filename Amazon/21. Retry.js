function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retry(fn, retries = 3, delay = 500) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === retries - 1) throw err;

            const backoff = delay * Math.pow(2, i);
            console.log(`Retry ${i + 1} failed, waiting ${backoff}ms`);

            await sleep(backoff);
        }
    }
}
