import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
//css
import './BtnProfile.css';

function BtnProfile( {icon, textLink, path} ) {
    return (
        <Button variant='contained' target="_blank" className='custom_btn_Profile' endIcon={icon ? (<div className='btn_icon_container_Profile'>{icon}</div>) : null}>
            <Link to={path} className='btn_text_Profile'>{textLink}</Link>
        </Button>
    )
}

export default BtnProfile