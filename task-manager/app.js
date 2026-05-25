const taskManager = require('./taskManager'); // Importing the module to manage the tasks
const fileHandler = require('./fileHandler'); // Importing the module to manage the file
const path = require('path'); // Import the path module (didn't use?)


//required test case, per assignment
try {
    const fileContent = fileHandler.loadTasks('tasks.json');
    taskManager.addTask(fileContent,"new task");
    taskManager.addTask(fileContent,"additional task");
    taskManager.listTasks(fileContent);
    fileHandler.saveTasks('tasks.json', fileContent);

}catch(err){
    console.log(err.message);
}finally{
    console.log(`done`);
}


//Create new file and verify file created with list + add a new task, list it, and save
try {   
    fileHandler.saveTasks('tasks2.json', ["This is a new file being created."]);
    const newfileContent = fileHandler.loadTasks('tasks2.json');
    taskManager.listTasks(newfileContent);
    taskManager.addTask(newfileContent,"additional task");
    taskManager.listTasks(newfileContent);
    fileHandler.saveTasks('tasks2.json', newfileContent);
}catch(err){
    console.log(err.message);
}finally{
    console.log(`done`);
}

//Testing Load functionality on non-existent file

try{
    const emptyFile = fileHandler.loadTasks('doesntexist.json');
    console.log(emptyFile);
}catch(err){
    console.log(err.message);
}finally{
    console.log(`done`);
}

//Use an existing file and pass no new task.
try{
    const fileContentNone = fileHandler.loadTasks('tasks.json');
    taskManager.addTask(fileContentNone,"");
}catch(err){
    console.log(err.message);
}finally{
    console.log(`done`);
}