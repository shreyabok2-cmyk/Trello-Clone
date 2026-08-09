import React from 'react';
import TaskCard from './TaskCard';

function Column({title, status, tasks, onDelete, onMove}) {
    const columnTasks = tasks.filter((task) => task.status === status);

    return(
        <div className = "column">
            <h2>{title} ({columnTasks.length})</h2>
            <div className = "task-list">
                {columnTasks.map((task) => (
                    <TaskCard key={task.id} task={task} 
                    onDelete={onDelete} onMove={onMove} />
                ))}
            </div>
        </div>
    );

    
}

export default Column;