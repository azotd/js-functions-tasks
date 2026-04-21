// BEGIN
const getGirlFriends = (users) => {
    return users.map(user => user.friends).flat().filter(user => user.gender === 'female');
}
export default getGirlFriends;
// END