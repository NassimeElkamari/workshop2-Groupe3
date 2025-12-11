const express = require('express');
const app = express();
const port = 3001;


let tasks = [
  { id: 1, title: 'Learn SonarQube', done: false },
  { id: 2, title: 'Integrate with Jenkins', done: false }
];

app.use(express.json());

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

function unusedFunction() {
  const a = 1;
  const b = 2;
  return a + b;
}

function addNumbers(a, b) {
  return a + b;
}


try {
  throw new Error("test error");
} catch (e) {
  console.error("An error occurred in test block:", e.message);
}



app.listen(port, () => {
  console.log(`Node Sonar API listening on port ${port}`);
});
