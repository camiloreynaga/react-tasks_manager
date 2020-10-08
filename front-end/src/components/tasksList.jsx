import React, {Component} from 'react'
import axios from 'axios'

export default class Lista extends Component {

    constructor(props){
        super(props)
        this.getListItems = this.getListItems.bind(this)
        this.mountListItems = this.mountListItems.bind(this)
        this.state = {list: this.getListItems()}
    }

    getListItems(){
        const URL = 'http://192.168.25.61:3003/task'
        axios.get(URL)
            .then(resp => {
                this.setState({list: resp.data})
            })
    }

    mountListItems(){
        const list = this.state.list || []
        const items = list.map(element => {
            const urgencyStyles = ['item-normal', 'item-urgent', 'item-veryUrgent']
            return (
            <div key={element.id_task} 
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

    render(){
    return(
    <div id="tasks-list">
        {this.mountListItems()}    
    </div>)}
}