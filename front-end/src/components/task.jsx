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
            <textarea className="task-description" rows={4}
            onChange={onChangeDescription} value={props.actualTask.description}>
            </textarea>
        </div>
    </div>)
}