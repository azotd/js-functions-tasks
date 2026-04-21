// BEGIN
const isPrime = (num) => {
    if (num < 2){
        return false;
    }
    for (let i = 2; i <= num / 2; i = i + 1){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
export default (num) => {
    console.log(isPrime(num) ? 'yes' : 'no');
}
// END