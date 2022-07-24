import React, { useRef, useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { darkTheme } from '../Components/Themes'
import music from '../assets/Audio/music.mp3';

const Box = styled.div`
display: flex;
cursor: pointer;
position: sticky;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}

@media (max-width: 991.5px) {
    justify-content: start;
    margin-right: auto;
}
`;

const play = keyframes`
0% {
    transform: scaleY(1);
}
50% {
    transform: scaleY(2);
}
100% {
    transform: scaleY(1);
}
`;

const Line = styled.div`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};
animation: ${play} 1s ease infinite;
animation-play-state: ${props => props.click ? 'running' : 'paused'};
height: 1rem;
width: 4px;
margin: 0 0.1rem;
`;

const SoundBar = () => {

    const ref = useRef(null);

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Box onClick={() => handleClick()} title='Click to Play and Pause !!'>
                <Line click={click} />
                <Line click={click} />
                <Line click={click} />
                <Line click={click} />
                <Line click={click} />

                <audio src={music} loop={true} ref={ref} />
            </Box>
        </ThemeProvider>
    )
}

export default SoundBar;