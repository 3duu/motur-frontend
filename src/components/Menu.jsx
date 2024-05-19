import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/providers">Gerenciar Integradores</Link>
                </li>
                <li>
                    <Link to="/endpoint-configs">Configurar Endpoints</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
