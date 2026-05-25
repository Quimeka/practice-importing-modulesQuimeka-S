function invalidateTask(task){
    
    if (typeof task !== "string" || task === "") {

        throw new Error ('No new task was provided!');
    }
}

function invalidateTasks(tasks){
    
    if (typeof tasks.trim === "") {

        throw new Error ('No existing task(s) provided.!');
    }
}

function addTask(tasks, task){

    if(!invalidateTask(task)){
        tasks.push(task);
        //console.log(tasks);
    }
}

function listTasks(tasks){

    if(!invalidateTasks(tasks)){
        console.log(tasks);
    }
}

module.exports = {addTask, listTasks};