const nextLarger = (a) => {
    const res = [];
    for (let i = 0; i < a.length; i++) {
        let currNum = a[i];
        for (let n = i; n < a.length; n++) {
            if (a[n] > currNum) {
                res.push(a[n]);
                break;
            } else if (n === a.length - 1) {
                res.push(-1);
            }
        }
    }
    return res
}
let arr = [6, 7, 3, 8];
console.log(nextLarger(arr))