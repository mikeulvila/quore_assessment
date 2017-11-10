import React from 'react';
import TaskListItem from './tasks_list_item';

const TaskList = (props) => {
    const taskItems = props.tasks.map((task) => {
        return (
            <TaskListItem
                onTaskSelect={props.onTaskSelect}
                key={task.id}
                selectedTask={props.selectedTask}
                task={task}/>
        );
    });

    return (
        <ul className="task-list">
            {taskItems}
        </ul>
    )
};

export default TaskList;