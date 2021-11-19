import React, { useState, useEffect } from 'react'
import './Progress.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    progress: {
        position: 'absolute',
        top: '45px',
        width: '100%',
        transition: '.5s all ease-in-out',
        backgroundColor: '#ffffff',
    },
  });

function Progress({ setOpen }) {
    const classes = useStyles();
    const [valueProgress, setValueProgress] = useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => {});
    //set hidden progress story profile 

    useEffect(()=>{
        progressRef.current = () => {
            if(valueProgress > 100){
                setOpen(false)
            } else {
                const vl1 = Math.random() * 8;
                const vl2 = Math.random() * 10;
                setValueProgress(valueProgress + vl1);
                setBuffer(valueProgress + vl1 + vl2)
            }
        }
    },)
    React.useEffect(() => {
        const timer = setInterval(() => {
          progressRef.current();
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    // useEffect(() => {
    //     const interval = setInterval(() => {   
    //         setValueProgress((oldValue) => {
    //             const newValue = oldValue + (1 / 10);
    //             if (newValue >= 100) { 
    //                 setOpen(false)
    //                 clearInterval(interval)     
    //             }            
    //             return newValue;
    //         })
    //     }, 10)  
    // }, [setOpen])
   

    return (
        <>
            <LinearProgress variant="buffer" className={classes.progress} value={valueProgress} valueBuffer={buffer} />
        </>
    )
}

export default Progress
