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

        const URL = 'http://192.168.25.61:3003/task'
        Axios.post(URL, {title, description, due_date, urgency})
            .then(resp => {        
                props.updateContainer()
                document.getElementById('newTaskModal').remove()
            })
    }

    return(
        <div id='newTaskModal' className='opened'>
            <div>
                <span className='newTaskTitle'><b>INSERIR NOVA TAREFA</b></span>
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
                <input type='text' name='newTaskDueDate' id='newTaskDueDate'/>
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