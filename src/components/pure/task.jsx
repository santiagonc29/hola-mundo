import React from 'react';
import PropTypes from 'prop-types';
import { task } from '../../models/task.class'


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Nivel: { task.level }
            </h4>
            <h5>
                La tarea esta: { task.completed ? 'Completado' : 'Pendiente' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(task)
};


export default TaskComponent;
