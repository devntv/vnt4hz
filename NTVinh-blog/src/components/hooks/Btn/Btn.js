
import React from 'react';
import Button from '@material-ui/core/Button';
//css
import './Btn.css';

function Btn( {text, icon, onClick, disabled, link} ) {
    
    return (
        <Button variant='contained' link ={link} disabled={disabled} onClick={onClick} className='custom_btn' endIcon={icon ? (<div className='btn_icon_container'>{icon}</div>) : null}>
            <span className='btn_text'>{text}</span>
        </Button>
    )
}

export default Btn
