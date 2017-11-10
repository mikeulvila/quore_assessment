import React from 'react';
import Moment from 'react-moment';

const TaskListItem = ({onTaskSelect, selectedTask, task}) => {
    const { title, created } = task.details,
        area = task.details.area.name !== undefined ? task.details.area.name : '';

    let selected = false;

    if (selectedTask !== null) {
        selected = task.id === selectedTask.id;
    }

    return (
        <li className={`task-list-item ${selected ? 'selected':''}`} onClick={() => onTaskSelect(task)}>
            <div className="task-title">
                {((area) => {
                    if (area !== '') {
                        return <span className="task-area">{area} </span>;
                    }
                })(area)}
                <span className={selected ? '':'light-text'}>{title}</span>
                {((selected) => {
                    if (!selected) {
                        return <Moment className="float-right lighter-text" unix format="h:mm a">{created}</Moment>;
                    }
                })(selected)}
            </div>
        </li>
    );
};

export default TaskListItem;
