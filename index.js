//var id, firstName,LastName,Email;
const users = []
const addUser = (id, first_name, last_name, email) => {
    users.push({ id, first_name ,last_name, email}); 
// add user to `users` array here

}
addUser(1, 'Un', 'Ratha', 'rathaun123@gmail.com');
addUser(2, 'Rosamond', 'Twelvetree', 'rtwelvetree0@prnewswire.com');
addUser(3, 'North', 'Keble', 'nkeble1@marriott.com');
addUser(4, 'Astra', 'Toderbrugge', 'atoderbrugge2@plala.or.jp');
addUser(5, 'Wilie', 'Daltry', 'wdaltry3@hexun.com');
addUser(6, 'Libby', 'McGillivrie', 'lmcgillivrie4@gnu.org ');
addUser(7, 'Bertina', 'Perulli', 'bperulli5@hugedomains.com');
addUser(8, 'Yorker', 'Itzakson', 'yitzakson6@webnode.com');
addUser(9, 'Ralf', 'Bruna', 'rbruna7@bandcamp.com');
addUser(10, 'Shell', 'Matiewe', 'smatiewe8@zimbio.com');
console.log(users); // [{ id: 1, first_name: 'Un',last_name'Ratha',email'Ratha123@gmail.com' }, 

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