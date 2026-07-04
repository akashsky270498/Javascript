const maxProductDistinct = (nums) => {
    if (!Array.isArray(nums)) return null;

    const unique = [...new Set(nums)];
    if (unique.length < 2) return null;

    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (let num of unique) {
        if (num >= max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        if (num <= min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2, min1 * min2);
};
console.log(maxProductOfTwoGreatest([3, 2, 6, 4, 1, 5]));
console.log(maxProductOfTwoGreatest([5, 5, 5, 2, 2, 1]));
console.log(maxProductOfTwoGreatest([-10, -10, 5, 6]));
console.log(maxProductOfTwoGreatest([7, 7, 7]));
console.log(maxProductOfTwoGreatest([-5, -5, -4, -3, -2, -6, -6, 7, -6]));
console.log(maxProductOfTwoGreatest([-1, -2, -3, -4]));