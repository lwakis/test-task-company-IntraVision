import React, {useState} from 'react';
import './addStatement.scss';
import axios from "axios";

const AddStatement = ({visible, closeEdit, task}) => {
    const [commentTextarea, setCommentTextarea] = useState("");
    function saveTask () {
        axios.post('http://intravision-task.test01.intravision.ru/api/acc75309-91c8-43ed-8f23-df9b7df9d6ef/Tasks', {
            "id": task.id,
            "name": task.name,
            "description": task.description,
            "comment": commentTextarea,
            "price": task.price,
            "taskTypeId": task.taskTypeId,
            "statusId": task.statusId,
            "priorityId": task.priorityId,
            "serviceId": task.serviceId,
            "resolutionDatePlan": task.resolutionDatePlan,
            "tags": [
                
            ],
            "initiatorId": task.initiatorId,
            "executorId": task.executorId,
            "executorGroupId": task.executorGroupId
        }).then(response => {console.log(response)})
          .catch(error => {console.log(error)});
    }
    return (
        <>
            {visible && <div>
                <div className="edit">
                    <div className="edit-header">
                        <div className="edit-id">№ {task.statusId}</div>
                        <div className="edit-title">{task.name}</div>
                        <span onClick={() => closeEdit()}>X</span>
                    </div>
                    <div className="content-edit">
                    <div className="edit-body">
                        <div className="edit-description">
                            <h3 className="description-title">Описание</h3>
                                <div>{task.description}</div>
                            </div>
                        <div className="edit-comments"></div>
                        <textarea onChange={(e) => setCommentTextarea(e.target.value)} value={commentTextarea} placeholder="Добавление коментариев" type="text"/>
                        <button onClick={() => {saveTask()}}>Сохранить</button>
                        <div className="comment">{task.comment}</div>
                    </div>
                    <div className="edit-info">
                        <div className="status-block">
                            <div className="circle" style={{backgroundColor: task.statusRgb}}></div>
                            <div className="status-name">{task.statusName}</div>
                        </div>
                        <div>
                            <h3 className="person">Заявитель</h3>
                                <h2>{task.initiatorName}</h2>
                        </div>
                        <div className="author">
                            <h3>Создана</h3>
                            <h2>{task.initiatorName}</h2>    
                        </div>
                        <div className="executor">
                            <h3>Исполнитель</h3>
                            <h2>{task.executorName}</h2>
                        </div>
                        <div className="priority">
                            <h3>Приоритет</h3>
                            <h2>{task.priorityName}</h2>
                        </div>
                        <div className="date">
                            <h3>Срок</h3>
                            <h2>{task.createdAt}</h2>
                        </div>
                        <div className="tags">{task.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}</div>
                    </div>
                    </div>
                    </div>
            </div>}
        </>
    );
}

export default AddStatement;