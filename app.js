//Selectors
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');
const filterOption = document.querySelector('.filter-tasks');
const background = document.querySelector('.navbar-nav');

//Event Listeners
document.addEventListener('DOMContentLoaded', setBackground);
document.addEventListener('DOMContentLoaded', getCompletedTasks);
document.addEventListener('DOMContentLoaded', getUncompletedTasks);
//Prevent empty input
taskButton.addEventListener('click', function (event) {
    const taskVal = taskInput.value.replace(/^\s+|\s+$/gm, '');
    if (taskVal == "" || taskVal == null) {
        event.preventDefault();
        alert('Please type something...');
    } else {
        addTask(event);
    }
});
taskList.addEventListener('click', checkDelete);
window.addEventListener('unload', saveCompletedtasks);
window.addEventListener('unload', saveUncompletedTasks);
filterOption.addEventListener('click', filterTasks);
background.addEventListener('click', changeBg);

//Functions

//Choose your own background
function changeBg(event) {
    const bgItem = event.target;
    switch (bgItem.classList[1]) {
        case 'ocean':
            document.body.style.background = "url('./ocean.jpg') no-repeat center";
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed, scroll';
            localStorage.setItem('background', JSON.stringify(bgItem.classList[1]));
            break;
        case 'mountain':
            document.body.style.background = "url('./mountain.jpg') no-repeat center";
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed, scroll';
            localStorage.setItem('background', JSON.stringify(bgItem.classList[1]));
            break;
        case 'desert':
            document.body.style.background = "url('./desert.jpg') no-repeat center";;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed, scroll';
            localStorage.setItem('background', JSON.stringify(bgItem.classList[1]));
            break;
        case 'jungle':
            document.body.style.background = "url('./jungle.jpg') no-repeat center";
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed, scroll';
            localStorage.setItem('background', JSON.stringify(bgItem.classList[1]));
            break;
    }
}

//Pulls last chosen background from the local storage
function setBackground() {
    const storedBg = JSON.parse(localStorage.getItem('background'));
    if (storedBg === 'ocean') {
        document.body.style.background = "url('./ocean.jpg') no-repeat center";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed, scroll';
    } else if (storedBg === 'mountain') {
        document.body.style.background = "url('./mountain.jpg') no-repeat center";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed, scroll';
    } else if (storedBg === 'desert') {
        document.body.style.background = "url('./desert.jpg') no-repeat center";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed, scroll';
    } else if (storedBg === 'jungle') {
        document.body.style.background = "url('./jungle.jpg') no-repeat center";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed, scroll';
    } else {
        document.body.style.background = 'linear-gradient(180deg, rgb(116, 116, 116) , rgb(255, 255, 255))';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed, scroll';
    }
}

//Adds tasks
function addTask(event) {
    event.preventDefault();
    //Task Div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'uncompleted');
    //Create li
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task-item');
    taskDiv.appendChild(newTask);
    //Checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fa fa-check"></fa>';
    completedButton.classList.add('complete-btn');
    taskDiv.appendChild(completedButton);
    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class ="fa fa-trash"></fa>';
    deleteButton.classList.add('delete-btn');
    taskDiv.appendChild(deleteButton);
    //Append to list
    taskList.appendChild(taskDiv);
    //Clear value
    taskInput.value = '';
}

function checkDelete(e) {
    const item = e.target;
    //delete task
    if (item.classList[0] === 'delete-btn') {
        const task = item.parentElement;
        task.classList.add('fall');
        //removeLocalTasks(task);
        task.addEventListener('transitionend', function () {
            task.remove();
        })
    }

    //check mark 
    if (item.classList[0] === 'complete-btn') {
        const task = item.parentElement;
        task.classList.toggle('completed');
        task.classList.remove('uncompleted');
    }
}
//Save completed tasks to local storage
function saveCompletedtasks(e) {
    const comptask = document.getElementsByClassName('completed');
    for (var i = 0; i < comptask.length; i++) {
        var ctask = comptask[i].innerText;
        let comptasks;
        if (localStorage.getItem('comptasks') === null) {
            comptasks = [];
        } else {
            comptasks = JSON.parse(localStorage.getItem('comptasks'));
        }
        comptasks.push(ctask);
        localStorage.setItem('comptasks', JSON.stringify(comptasks))
    };
}

//Filter tasks
function filterTasks(e) {
    const tasks = taskList.childNodes;
    tasks.forEach(function (task) {
        switch (e.target.value) {
            case "all":
                task.style.display = 'flex';
                break;
            case "completed":
                if (task.classList.contains('completed')) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
            case 'in-progress':
                if (!task.classList.contains('completed')) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
        }
    });
}

//Pull completed tasks from local storage
function getCompletedTasks() {
    let comptasks;

    if (localStorage.getItem('comptasks') === null) {
        comptasks = [];
    } else {
        comptasks = JSON.parse(localStorage.getItem('comptasks'));
    }
    comptasks.forEach(function (comptask) {
        //Task Div
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task', 'completed');
        //Create li
        const newTask = document.createElement('li');
        newTask.innerText = comptask;
        newTask.classList.add('task-item');
        taskDiv.appendChild(newTask);
        //Checked button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class ="fa fa-check"></fa>';
        completedButton.classList.add('complete-btn');
        taskDiv.appendChild(completedButton);
        //Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class ="fa fa-trash"></fa>';
        deleteButton.classList.add('delete-btn');
        taskDiv.appendChild(deleteButton);
        //Append to list
        taskList.appendChild(taskDiv);
    });
    localStorage.removeItem('comptasks');
}

//Save to uncompleted tasks to local storage
function saveUncompletedTasks(untask) {
    const task = document.getElementsByClassName('uncompleted');
    for (var i = 0; i < task.length; i++) {
        var untask = task[i].innerText;
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(untask);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    };
}

    //Pull uncompleted tasks from local storage
    function getUncompletedTasks() {
        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function (task) {
            //Task Div
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task', 'uncompleted');
            //Create li
            const newTask = document.createElement('li');
            newTask.innerText = task;
            newTask.classList.add('task-item');
            taskDiv.appendChild(newTask);
            //Checked button
            const completedButton = document.createElement('button');
            completedButton.innerHTML = '<i class ="fa fa-check"></fa>';
            completedButton.classList.add('complete-btn');
            taskDiv.appendChild(completedButton);
            //Delete button
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class ="fa fa-trash"></fa>';
            deleteButton.classList.add('delete-btn');
            taskDiv.appendChild(deleteButton);
            //Append to list
            taskList.appendChild(taskDiv);
        });
        localStorage.removeItem('tasks');
    };
