const fs = require('fs'); // Import the 'fs' module

function validateFilePath(fileName){

        return fs.existsSync(fileName);

}

function saveTasks(filePath, tasks){

    if(validateFilePath(filePath)){
  
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        
    }else{

        console.log("Creating file...");
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

    }
}

function loadTasks(filePath){

    if(validateFilePath(filePath)){

        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    }else{
        return [];
    }
}

module.exports = {saveTasks, loadTasks};