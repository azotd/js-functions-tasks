// BEGIN
const convert = (...dates) => {
    if (dates.length === 0){
        return [];
    }
    const res = [];
    for (let i of dates) {
        let date = new Date(...i);
        res.push(date.toDateString());
    }
    return res;
}
export default convert;
// END