import React from 'react';
import Moment from 'react-moment';

const TaskDetail = ({task}) => {
    let assignee = '';

    if (task && task.details.assignedTo.firstName !== undefined) {
        assignee = `${task.details.assignedTo.firstName} ${task.details.assignedTo.lastName}`;
    }

    if (!task) {
        return (
            <div className="no-items-selected">
                <p>No Item Selected</p>
            </div>
        );
    }

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div className="task-detail light-text">
            <div className="task-detail-header">
                <div className="header-item-center">
                    <b>Work Order</b><span className="lighter-text"> Open</span>
                </div>
                <div className="header-item-right">
                    <ul className="icon-group">
                        <li className="icon-sub-edit"></li>
                        <li className="icon-sub-trash"></li>
                        <li className="icon-sub-share"></li>
                        <li className="icon-sub-attach"></li>
                    </ul>
                </div>
            </div>
            <div className="order-details">
                <p>Order Details</p>
                <div className="detail-group">
                    <label className="detail-label">Item</label>
                    <div className="detail-item">
                        {task.details.item || 'N/A'}
                        <a className="has-info-icon" href="#"><img src="/images/icon-info.png"/></a>
                    </div>
                </div>
                <div className="detail-group">
                    <label className="detail-label">Issue</label>
                    <div className="detail-item">{task.details.issue || 'N/A'}</div>
                </div>
                <div className="detail-group">
                    <label className="detail-label">Where</label>
                    <div className="detail-item has-bottom-border">{task.details.where ? capitalize(task.details.where) : 'N/A'}</div>
                </div>
                <div className="detail-group">
                    <label className="detail-label">Details</label>
                    <div className="detail-item">{task.details.description}</div>
                </div>
                <div className="detail-group">
                    <label className="detail-label">Due</label>
                    <div className="detail-item">
                        <Moment format="MMMM D, YYYY" unix>{task.details.due}</Moment>
                    </div>
                </div>
                <div className="detail-group">
                    <label className="detail-label">Assignee</label>
                    <div className="detail-item has-bottom-border">
                        <a href="#">{assignee}</a>
                    </div>
                </div>
                <div className="detail-group">
                    <label className="detail-label">Photos</label>
                    <div className="detail-item">
                        {((uploads) => {
                            if (uploads) {
                                return uploads.map((upload, index) => {
                                    return <img key={index} className="upload" src={`/images/${upload}`} height="120"/>
                                })
                            }
                        })(task.details.uploads)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;