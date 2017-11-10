import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames';

const TaskListItem = ({onTaskSelect, selectedTask, task}) => {
    const { title, created } = task.details,
        area = task.details.area.name !== undefined ? task.details.area.name : '';

    let selected = false,
        isRoom = false,
        isArea = false,
        isNote = false;

    if (selectedTask !== null) {
        selected = task.id === selectedTask.id;
    }
    if (isNaN(area) || area === '') {
        isNote = !area.length;
        isArea = area.length;
    }
    else {
        isRoom = true;
    }

    let taskTitleClasses = classNames('task-title', {
        'has-orange-border': isArea && !selected,
        'has-blue-border': isRoom && !selected,
        'has-green-border': isNote && !selected
    });

    return (
        <li className={`task-list-item ${selected ? 'selected':''}`} onClick={() => onTaskSelect(task)}>
            <div className={taskTitleClasses}>
                <div>
                    {((area) => {
                        if (area !== '') {
                            return <span className="task-area">{area}</span>;
                        }
                    })(area)}
                    <span className={selected ? '':'light-text'}>{title}</span>
                </div>
                {((selected) => {
                    if (!selected) {
                        return <Moment className="task-time lighter-text" unix format="h:mmA">{created}</Moment>;
                    }
                })(selected)}
            </div>
        </li>
    );
};

export default TaskListItem;
