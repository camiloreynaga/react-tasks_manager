import React from 'react'

export default () => (
    <div id="tasks-list">
        <div className="task-item item-normal">
            <div className="task-itemTitle">
                [OC=1028] Tarefa 1
            </div>
            <div className="task-itemDesc">
                Criar novo componente para aumento de colaboradores que entrarão na companhia para sanar as demandas
                advindas do aumento de casos do corona.
            </div>
        </div>
        <div className="task-item item-urgent">
            <div className="task-itemTitle">
                [OC=4875] Tarefa 2
            </div>
            <div className="task-itemDesc">
                Realizar o levantamento do escopo do novo projeto que deverá ser
                implementado na plataforma.
            </div>
        </div>
        <div className="task-item item-veryUrgent">
            <div className="task-itemTitle">
                [OC=3825] Tarefa 3
            </div>
            <div className="task-itemDesc">
                Apagar a conta do fulano e do beltrano.
            </div>
        </div>
    </div>
)