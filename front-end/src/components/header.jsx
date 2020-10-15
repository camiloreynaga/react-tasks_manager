import React from 'react'
import { Link } from 'react-router-dom';

export default () => (
    <React.Fragment>
        <div id='NavBar'>
            <div className='NavItem'>
                TASKS¡
            </div>
            <Link className='NavItem' to='tarefas' replace>
                Tarefas
            </Link>
            <Link className='NavItem' to='relatorios' replace>
                Relatórios
            </Link>
            <Link className='NavItem' to='sobre' replace>
                Sobre
            </Link>
        </div>
        <div id='navSpacer'></div>
    </React.Fragment>
)