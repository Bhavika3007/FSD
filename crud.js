const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
let users = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
];
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send({ message: 'Name and email are required' });
  }
const newUser = {
    id: users.length + 1,
    name,
    email,
  };
users.push(newUser);
  res.status(201).send(newUser);
});
app.get('/users', (req, res) => {
  res.status(200).json(users);
});
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  res.status(200).json(user);
});
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const userId = parseInt(req.params.id);
    let user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    res.status(200).json(user);
});
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return res.status(404).send({ message: 'User not found' });
    }
    users.splice(index, 1);
    res.status(200).send({ message: 'User deleted successfully' });
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});