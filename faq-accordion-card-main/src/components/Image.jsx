import styled from 'styled-components';
import bg from '../../images/bg-pattern-desktop.svg'


export default function Image(props) {

    return (

        <ImgDiv>
            <Img src={props.src}/>
            <Bg src={bg} ></Bg>
        
        </ImgDiv>
    )
}

const ImgDiv = styled.div`

    height: 100%;
    position: relative;
    /* flex: 1; */
    display: grid;
    align-items: center;
    /* overflow: hidden; */
    transform: translate(-83px,0);
`

const Img = styled.img`
    /* flex: 1; */
    /* transform: translate(-115px, 0); */
    position: static;
    
`
const Bg = styled.img`
    position: absolute;
    transform: translate(-498px, -69px);
`




