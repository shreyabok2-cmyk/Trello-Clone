import React from 'react';
function TaskCard({task, onDelete, onMove}){
    return(
        <div className="task-card">
            <p>{task.title}</p>
            <div className="card-action">
                {task.status !== 'todo' &&(
                    <button onClick ={() => onMove(task.id, 'todo')}>To Do</button>
                )}

                {task.status !== 'inprogress' && (
                    <button onClick ={() => onMove(task.id, 'inprogress')}>In Progress</button>
                )}

                {task.status !== 'done' && (
                    <button onClick={() => onMove(task.id, 'done')}>Done</button>
                )}

                <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;