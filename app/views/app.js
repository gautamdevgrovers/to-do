document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Function to load tasks from the server
  async function loadTasks() {
    try {
      const response = await fetch('/tasks');
      const tasks = await response.json();
      taskList.innerHTML = '';
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.description;
        taskList.appendChild(li);
      });
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  }

  // Function to add a new task
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
      try {
        await fetch('/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ task })
        });
        taskInput.value = '';
        loadTasks();
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  });

  // Initial load of tasks
  loadTasks();
});
