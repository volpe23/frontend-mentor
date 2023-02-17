import styled from 'styled-components';
import Image from './Image';
import Faq from './FaqDiv';
import '../styles/Card.css'

export default function Card(props) {


    return (
        <div className='card'>
            <Image src={props.imageSource} smallBox={props.smallBox}></Image>
            <Picture >
                <source media='min-width:900px' srcset={props.smallBox}></source>
                <img  src={props.smallBox}/>
            </Picture>
            
            <Faq></Faq>
        </div>
    )
}

const SmallBoxImg = styled.img`
    position: absolute;
    transform: translate(-92px, 50px);
`

const Picture = styled.picture`
    position: absolute;
    transform: translate(-92px, 50px);
`