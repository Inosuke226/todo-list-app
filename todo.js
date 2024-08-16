const taskList = document.getElementById('task-list');
const inputField = document.querySelector('.input');
const addButton = document.querySelector('.button');
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'button';

// Add styles to position the remove button in the corner
removeButton.style.position = 'absolute';
removeButton.style.top = '10px'; // adjust the value to position the button
removeButton.style.right = '10px'; // adjust the value to position the button

let tasks = [];

addButton.addEventListener('click', () => {
  const newTask = inputField.value.trim();
  if (newTask) {
    tasks.push(newTask);
    inputField.value = '';
    renderTaskList();
  }
});

removeButton.addEventListener('click', () => {
  if (tasks.length > 0) {
    tasks.pop();
    renderTaskList();
  }
});

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(taskElement);
  });
}

document.body.appendChild(removeButton); // Add the remove button to the page
renderTaskList();