import React from 'react';
import './addStatement.scss';
const AddStatement = ({visible, task}) => {
    return (
        <>
            {visible && <div>
                <div className="edit">
                    <div className="edit-header">
                        <div className="edit-id">№ {task.statusId}</div>
                        <div className="edit-title">{task.name}</div>
                        <span>X</span>
                    </div>
                    <div className="content-edit">
                    <div className="edit-body">
                        <div className="edit-description">
                            <div className="description-title">Описание</div>
                                <div>{task.description}</div>
                            </div>
                        <div className="edit-comments"></div>
                        <input placeholder="Добавление коментариев" type="text"/>
                        <button>Сохранить</button>
                    </div>
                    <div className="edit-info">
                        <div className="person">{task.initiatorName}</div>
                        <div className="author">{task.initiatorName}</div>
                        <div className="executor">{task.executorName}</div>
                        <div className="priority">{task.priorityName}</div>
                        <div className="date">{task.createdAt}</div>
                        <div className="tags">{task.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}</div>
                    </div>
                    </div>
                    </div>
            </div>}
        </>
    );
}

export default AddStatement;