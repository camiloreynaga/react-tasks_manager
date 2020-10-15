import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Header from './components/header'
import TaskContainer from './components/tasksContainer'
import './index.css'

export default () => (
    <HashRouter>
        <Header/>
        <Route path="/tarefas" component={TaskContainer} />
    </HashRouter>
)