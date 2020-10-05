import React from 'react';

import Header from './components/header'
import TaskContainer from './components/tasksContainer'

import './index.css'

export default () => (
    <React.Fragment>
        <Header/>
        <TaskContainer/>
    </React.Fragment>
)