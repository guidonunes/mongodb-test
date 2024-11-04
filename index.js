const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));


  //Schema
  //Document, Collection, Database
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String
});

const User = mongoose.model('User', userSchema);


async function fetchInformation(){
  const users = await User.find({});
  console.log(users);
}

fetchInformation();

// async function storeInformation(userData) {
//   const user = new User(userData);
//   await user.save();
//   console.log(user);
// }

// // Define additional users
// const usersData = [
//   { name: 'Alice Smith', age: 32, isMarried: true, salary: 60000, gender: 'Female' },
//   { name: 'Bob Johnson', age: 45, isMarried: true, salary: 80000, gender: 'Male' },
//   { name: 'Carol White', age: 28, isMarried: false, salary: 55000, gender: 'Female' },
//   { name: 'David Brown', age: 39, isMarried: true, salary: 70000, gender: 'Male' },
//   { name: 'Eva Green', age: 24, isMarried: false, salary: 48000, gender: 'Female' }
// ];

// // Save all users to the database
// async function saveUsers() {
//   for (const userData of usersData) {
//     await storeInformation(userData);
//   }
// }

// saveUsers();
