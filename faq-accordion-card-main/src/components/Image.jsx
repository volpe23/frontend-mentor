import styled from 'styled-components';
import bg from '../../images/bg-pattern-desktop.svg';
import '../styles/Illustration.css';

export default function Image(props) {

    return (

        <div className='illustration'>
            <Img src={props.src}/>
            <Bg src={bg} ></Bg>
        </div>
    )
}

const Img = styled.img`
    position: static;
    
`
const Bg = styled.img`
    position: absolute;
    transform: translate(-498px, -69px);
    z-index: -10;
`




