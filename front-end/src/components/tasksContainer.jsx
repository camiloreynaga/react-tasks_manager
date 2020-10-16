import React, {Component} from 'react'
import axios from 'axios'

import TasksList from './tasksList'
import Task from './task'
import TaskFunctions from './taskFunctions'

export default class TaskContainer extends Component{
    constructor(props){
        super(props)
        this.getListItems = this.getListItems.bind(this)
        this.changeTask = this.changeTask.bind(this)
        this.onClickFunction = this.onClickFunction.bind(this)
        this.state = {list: this.getListItems(), actualTask: {}}
    }

    getListItems(){
        const URL = 'http://localhost:3003/task'
        axios.get(URL)
            .then(resp => {
                this.setState({list: resp.data})
            })
    }

    changeTask(id, title, description){
        const URL = 'http://localhost:3003/task'
        axios.put(URL, {id, title, description})
            .then(resp => {
                this.forceUpdate()
            })
    }

    onClickFunction(idTask){
        const actualTask = this.state.list.find((element) => {
            return element.id_task === idTask ? element : null
        })
        
        this.setState({actualTask})
    }
    
    render(){
        return(
        <div id="tasks-container">
            <TasksList listItems={this.state.list}
                onClickFunction={this.onClickFunction}/>
            <Task actualTask={this.state.actualTask}
            changeTitleFunction={this.changeTask}/>
            <TaskFunctions updateContainer={this.getListItems}
            actualTask={this.state.actualTask}/>
        </div>
    )}
}