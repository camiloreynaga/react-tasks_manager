import React from 'react'

import TasksList from './tasksList'
import Task from './task'
import TaskFunctions from './taskFunctions'

export default () => (
    <div id="tasks-container">
        <TasksList/>
        <Task/>
        <TaskFunctions/>
    </div>
)