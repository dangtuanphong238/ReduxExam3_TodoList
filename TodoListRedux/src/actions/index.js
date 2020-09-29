//Các hàm sinh ra các đối tượng action
import { ADD_NEW_TASK, TOGGLE_ONE_TASK} from './actionTypes'
let newTaskId = 0;

//Action:
export const addNewTask = (inputTaskName) => {
    return{
        type : ADD_NEW_TASK,
        taskId = newTaskId++,
        taskName = inputTaskName
    }
}

//Action:
export const toggleTask = (taskId) => {
    return{
        type : TOGGLE_ONE_TASK,
        taskId = taskId 
    }
}