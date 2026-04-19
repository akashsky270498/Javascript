class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const value = this.map.get(key);

        //Move to most recent
        this.map.delete(key);
        this.map.set(key, value);

        return value;
    }

    put(key, value) {
        if (this.map.get(key)) {
            this.map.delete(key);
        }

        this.map.set(key, value);
        //remove LRU
        if (this.map.size > this.capacity) {
            const lruKey = this.map.keys().next().value;
            this.map.delete(lruKey);
        }
    }
}

const cache = new LRUCache(2);

cache.put(1, 10);   // [1]
cache.put(2, 20);   // [1,2]

console.log(cache.get(2)); // 10 → [2,1]

cache.put(3, 30);   // remove 2 → [1,3]

console.log(cache.get(1)); // -1

