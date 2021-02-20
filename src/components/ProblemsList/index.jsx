import React, {useEffect, useState} from 'react';
import './problemsList.scss'
import axios from "axios";
import Preloader from '../Preloader';
import AddStatement from '../AddStatement';


const ProblemsList = () => {
    const [allTasks, setAllTasks] = useState(false);
    const [visible, setVisible] = useState(false);
    const [task, setTask] = useState({});

    useEffect(() => {
        axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=56b01ec2-f456-4de4-8b76-5359e3a22607')
        .then(response => {
            setAllTasks(response.data.value);
            console.log(response.data.value);
        })
    }, []);

    const editTask = (task) => {
        console.log(task);
        setTask(task)
        setVisible(true)
    }

    return (
        <div className="two-components">
        <div className="problems-block">
            <button className="create-problem">Создать заявку</button>
            <table className="table-name">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Название</td>
                        <td>Статус</td>
                        <td>Исполнитель</td>
                    </tr>
                </thead>
            </table>
            <hr/>
            
            {allTasks ? allTasks.map(task =>
            <div onClick={() => editTask(task)} className="task" key={task.id}> 
                <div style={{ backgroundColor: task.statusRgb}}></div>
                <table>
                    <tbody>
                        <tr>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>
                                <span style={{ backgroundColor: task.statusRgb}}>{task.statusName}</span>
                            </td>
                            <td>{task.executorName}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            ) : <Preloader/>}
        </div>
        <AddStatement visible={visible} task={task}/>
        </div>
);
}

export default ProblemsList;

