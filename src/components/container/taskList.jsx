import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskList = () => {

    const defaultTask = new task('example','Default description',false,LEVELS.NORMAL);

    return (
        <div>
            <div>
                Tus Tareas:
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskList;
