import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import './ScrollToTop.css'
const useStyles = makeStyles((theme)=>({
    toTop:{
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        // background:'#ffff',
        // border:'1px solid #dbdde2 ',
        transition:'all .3s ease-in',
        fontSize:'10px',
        color:'aqua',
       
        "&:hover, &.Mui-focusVisible":{
            transition: '.3s',
            color:'#00ffc4fa'
        },
       right:'5%'
    },
  
}));


function ScrollToTop( {showBelow} ) {
    // style

    const classes = useStyles();


    const [show, setShow] = useState(showBelow ? false: true);

    const handleScroll =()=>{
        if(window.pageYOffset > showBelow){
            if(!show)
                setShow(true)      
        }else{
            if(show) setShow(false)
        }
    }
    //scroll mouse move
    useEffect(()=>{
        if(showBelow){
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })
    const handleScrollTop =()=>{
        window[`scrollTo`]({top:0, behavior:`smooth`})
    }

    return (
        <>
            {show &&
                <IconButton onClick={handleScrollTop} className={classes.toTop}>
                    <ExpandLessIcon className="inconTop"/>
                </IconButton>
            }
        </>
    )

}

export default ScrollToTop
