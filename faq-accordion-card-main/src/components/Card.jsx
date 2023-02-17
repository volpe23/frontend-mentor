import styled from 'styled-components';
import Image from './Image';
import Faq from './FaqDiv';
import '../styles/Card.css'

export default function Card(props) {


    return (
        <div className='card'>
            <Image src={props.imageSource} smallBox={props.smallBox}></Image>
            <SmallBoxImg src={props.smallBox}/>
            
            <Faq></Faq>
        </div>
    )
}

const SmallBoxImg = styled.img`
    position: absolute;
    transform: translate(-92px, 50px);
`

