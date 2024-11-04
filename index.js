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
  const users = await User.find({isMarried: false}).select('name salary');
  console.log(users);
}

fetchInformation();

// async function storeInformation(){
//   const user = new User({
//     name: 'John Doe',
//     age: 25,
//     isMarried: false,
//     salary: 50000,
//     gender: 'Male'
//   });
//   await user.save();
//   console.log(user);
// }

// storeInformation();
