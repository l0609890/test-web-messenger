const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get("/classrooms", (req, res) => {
  res.json("Yo mama")
})

app.get("/mason", (req, res) => {
  res.json("hello")
})

app.listen(9000, () => {
  console.log(process.env)
});