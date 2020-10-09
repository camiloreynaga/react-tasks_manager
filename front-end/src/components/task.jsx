import React from 'react'
import '../index.css'

export default props => {
    return (<div id="task-show">
        <div id="task-showTitle">
            <input type="text" value={(props.actualTask.title || "Selecione uma tarefa")}/>
        </div>
        <div id="task-showDescription">
            <span><b>Descrição:</b></span>
            <span className="task-description" role="textbox" contentEditable="">
                {props.actualTask.description}
            </span>
        </div>
    </div>)
}