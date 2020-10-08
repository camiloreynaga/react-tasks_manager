import React from 'react'
import '../index.css'

export default () => (
    <div id="task-show">
        <div id="task-showTitle">
            <input type="text" defaultValue="[OC=1028] Tarefa 1"/>
        </div>
        <div id="task-showDescription">
            <span><b>Descrição:</b></span>
            <span className="task-description" role="textbox" contentEditable="">
                Criar novo componente para aumento de colaboradores que entrarão na 
                companhia para sanar as demandas advindas do aumento de casos do corona.
            </span>
        </div>
    </div>
)