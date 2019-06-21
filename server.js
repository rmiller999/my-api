const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));;

// Read all records route
app.get('/dogs', function(req, res) {
  db.dog.findAll().then(function(dogs) {
    res.json(dogs);
  });
});

// Read one record route
app.get('/dogs/:id', function(req, res) {
  db.dog.findOne({
    where: {id: parseInt(req.params.id)}
  }).then(function(dog) {
    res.json(dog);
  });
});

// Create one record route
app.post('/dogs', function(req, res) {
  db.dog.create({
    name: req.body.name,
    breed: req.body.breed,
    age: parseInt(req.body.age),
    weight: parseInt(req.body.weight)
  }).then(function(data) {
    console.log(data);
    res.json(data);
  })
});

// Update one record route
app.put('/dogs/:id', function(req, res) {
  db.dog.update({
    name: req.body.name,
    breed: req.body.breed,
    age: parseInt(req.body.age),
    weight: parseInt(req.body.weight)
  }, {
    where: {id: parseInt(req.params.id)}
  }).then(function(count) {
    res.json(count);
  })
})

// Delete one record route
app.delete('/dogs/:id', function(req, res) {
  db.dog.destroy({
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.json(data);
  });
});


app.listen(3000, function() {
  console.log('Up and Running on port 3000...');
});