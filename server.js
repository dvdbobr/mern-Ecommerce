require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const cookieParser = require('cookie-parser')
const app = express();
const path = require('path');
const userRouter = require('./routes/users.route');
const productRouter = require('./routes/products.route');
const categoryRouter = require('./routes/category.route');
const port = 8000;

// app.use(cookieParser());
app.use(express.json());
app.use(cors());
// app.use('/api/users', userRouter)
app.get('/api/getUser', (req, res) => {
  const user = 'David';
  res.json(user);
})
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/category', categoryRouter)
const uri = process.env.MONGODB_URL
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, err => {
  if (err) throw err;
  console.log("Connected to Mongo")
})
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`)
});
