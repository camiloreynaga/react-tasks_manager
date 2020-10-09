import React from 'react'

function mountListItems(listItems, onClickFunction){
    const list = listItems || []
    const items = list.map(element => {
        const urgencyStyles = ['item-normal', 'item-urgent', 'item-veryUrgent']
        return (
        <div key={element.id_task} 
                onClick={() => onClickFunction(element.id_task)}
                className={`task-item ${urgencyStyles[element.urgency]}`}>
            <div className="task-itemTitle">
            {`#${element.id_task}`} - {element.title}
            </div>
            <div className="task-itemDesc">
                {element.description}
            </div>
            <div className="task-itemDesc">
                Prazo: {element.due_date.slice(0, 10).replace(/-/g,'/')}
            </div>
        </div>
    )})

    return items
}

export default props => (

    <div id="tasks-list">
        {mountListItems(props.listItems, props.onClickFunction)}    
    </div>
)