const mongoose = require('mongoose');

//Save a reference to the schema constructor
const Schema = mongoose.Schema;

//Create new AuthorSchema object using the Schema constructor
let AuthorSchema = new Schema ({
  name: {type: String, required: true},
  books: Schema.Types.ObjectId,
});

//Create model form the above Schema using mongoose's model method 
const Author = mongoose.model('Author', AuthorSchema);

//Export the Author model
module.exports = Author;