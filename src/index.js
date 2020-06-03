// React:
import React from 'react';
import ReactDOM from 'react-dom';

// Materialize
import 'materialize-css/dist/css/materialize.min.css';

// Componentes:
import Routes from './Page/Routes';

ReactDOM.render(

    <React.StrictMode>
        <Routes />
    </React.StrictMode>,
    document.getElementById('root')
);
