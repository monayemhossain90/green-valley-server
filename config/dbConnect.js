const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    let mongoURI="mongodb+srv://wishCard:ZXtdgQGKmWM1mW6T@cluster0.j7kvy.mongodb.net/green-valley?retryWrites=true&w=majority";
  try {
    const conn = mongoose.connect(mongoURI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;