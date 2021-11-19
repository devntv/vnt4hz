import styled from 'styled-components/macro';

export const ProgressBar = styled.div`
    position: absolute !important;
    z-index: 99 !important;
    width: 100% !important;
    top: 100% !important;
    left: 0 !important;
    /* background:  var(--main-color) ; */
    border-radius: 10px !important;
`

export const ProgressBarChild = styled.div`
    opacity: 0 ;
    background: linear-gradient(to left, #04f1be , var(--main-color)) !important;
    transform: scale(0,0) ;
    transform-origin: top left !important ;
`