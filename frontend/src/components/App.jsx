import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles.css';
import NavBarCustom from './NavBarCustom';
import FormCustom from './FormCustom';



function App(props) {
    
    return (
        <div>
        <NavBarCustom/>
        <FormCustom/>
        </div>
    );
}

export default App;