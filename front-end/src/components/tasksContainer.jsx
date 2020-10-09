import React, {Component} from 'react'
import axios from 'axios'

import TasksList from './tasksList'
import Task from './task'
import TaskFunctions from './taskFunctions'

export default class TaskContainer extends Component{
    constructor(props){
        super(props)
        this.getListItems = this.getListItems.bind(this)
        this.onClickFunction = this.onClickFunction.bind(this)
        this.state = {list: this.getListItems(), actualTask: {}}
    }

    getListItems(){
        const URL = 'http://192.168.25.61:3003/task'
        axios.get(URL)
            .then(resp => {
                this.setState({list: resp.data})
            })
    }

    onClickFunction(idTask){
        const actualTask = this.state.list.find((element) => {
            if(element.id_task === idTask)
                return element
        })
        
        this.setState({actualTask})
    }
    
    render(){
        return(
        <div id="tasks-container">
            <TasksList listItems={this.state.list}
                onClickFunction={this.onClickFunction}/>
            <Task actualTask={this.state.actualTask}/>
            <TaskFunctions/>
        </div>
    )}
}