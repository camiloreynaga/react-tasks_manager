import React, {useState} from 'react'
import '../index.css'

export default props => {
    const actualTask = props.actualTask

    const [actualTitle, setTitle] = useState('')    

    const onChangeTitle = event => {
        setTitle(event.target.value)
        actualTask.title = event.target.value
        props.changeTitleFunction(actualTask.id_task, actualTask.title, actualTask.description)
    }

    const onChangeDescription = event => {
        actualTask.description = event.target.value        
        props.changeTitleFunction(actualTask.id_task, actualTask.title, actualTask.description)
    }
    const urgencyTranslated = ['Normal', 'Urgente', 'Muito urgente']
    
    return (<div id="task-show">
        <div id="task-showTitle">
            <input type="text" value={
                props.actualTask.title ?
                `${actualTask.title}` : 
                props.actualTask.id_task ? "" : "Selecione uma tarefa"}
                onChange={onChangeTitle}/>
        </div>
        <div id="task-showDescription">
            <span><b>Descrição:</b></span>
            <textarea className="task-description"
            onChange={onChangeDescription} value={props.actualTask.description}>
            </textarea>
            <span data='date'><b>Vencimento: </b>{props.actualTask.due_date 
            ? props.actualTask.due_date.slice(0, 10).replace(/-/g,'/') 
            : null}</span>
            <span data='date'><b>Data de entrada: </b>{props.actualTask.created_at 
            ? props.actualTask.created_at.slice(0, 10).replace(/-/g,'/') 
            : null}</span>
            <span data='date'><b>Urgência: </b>{props.actualTask.urgency >= 0 
            ? urgencyTranslated[props.actualTask.urgency]
            : null}</span>
        </div>
    </div>)
}