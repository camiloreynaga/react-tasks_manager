import React, {useState} from 'react'
import Axios from 'axios'
import '../index.css'

export default props => {
    const AddTask = () => {
        let UrgencyArray = []
        UrgencyArray['Normal'] = 0
        UrgencyArray['Urgente'] = 1
        UrgencyArray['Muito Urgente'] = 2
        
        const title = document.getElementById('newTaskTitle').value
        const description = document.getElementById('newTaskDescription').value
        const due_date = document.getElementById('newTaskDueDate').value
        const urgency = UrgencyArray[document.getElementById('newTaskUrgency').value]

        document.getElementById('newTaskTitle').value = null
        document.getElementById('newTaskDescription').value = null
        document.getElementById('newTaskDueDate').value = null
        document.getElementById('newTaskUrgency').value = null

        const URL = 'https://tasksbkend.herokuapp.com/task'
        Axios.post(URL, {title, description, due_date, urgency})
            .then(resp => {        
                props.updateContainer()
                props.closeNewTaskModal()
            })
    }

    return(
        <div id='newTaskModal' className='opened'>
            <div className='closeNewTask' onClick={() => props.closeNewTaskModal()}>
                <svg width="25px" height="25px" viewBox="0 0 16 16" className="bi bi-x-square-fill" fill="#df3939" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </div>
            <div className='newTaskTitle'>
                <span><b>INSERIR NOVA TAREFA</b></span>
            </div>
            <div className='field'>
                <label><b>Título:</b></label>
                <input type='text' name='newTaskTitle' id='newTaskTitle'/>
            </div>
            <div className='field'>
                <label><b>Descrição:</b></label>
                <textarea id='newTaskDescription' />
            </div>
            <div className='field'>
                <label><b>Prazo:</b></label>
                <input type='text' placeholder='2020-01-01' name='newTaskDueDate' id='newTaskDueDate'/>
            </div>
            <div className='field'>
                <label><b>Urgência:</b></label>
                <select type='text' name='newTaskUrgency' id='newTaskUrgency'>
                    <option>Normal</option>
                    <option>Urgente</option>
                    <option>Muito Urgente</option>
                </select>
            </div>
            <button onClick={AddTask}>
                Enviar
            </button>
        </div>
    )
}