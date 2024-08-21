//var id, firstName,LastName,Email;
const users = []
const addUser = (id, first_name, last_name, email) => {
    users.push({ id, first_name ,last_name, email}); 
// add user to `users` array here

}
addUser(1, 'Un', 'Ratha', 'rathaun123@gmail.com');

console.log(users); // [{ id: 1, name: 'Un' }, 

const find_user = id => {
    // finish this function here
        return users.find(user => user.id === id) || null;
    };

// you can test your code here
 // Example usage
 const foundUser = find_user(0);
 console.log(foundUser); // { id: 1, name: 'Un' }


// DO NOT REMOVE THIS
export {users, find_user}