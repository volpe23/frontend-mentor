import styled from 'styled-components';
import Image from './Image';

import Faq from './FaqDiv';

export default function Card(props) {


    return (
        <CardDiv>
            <Image src={props.imageSource} smallBox={props.smallBox}></Image>
            <SmallBoxImg src={props.smallBox}/>
            
            <Faq></Faq>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    width: 920px;
    height: 500px;
    background-color: white;
    border-radius: 20px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    /* padding: 60px; */
`;



const SmallBoxImg = styled.img`
    position: absolute;
    transform: translate(-92px, 60px);
`

