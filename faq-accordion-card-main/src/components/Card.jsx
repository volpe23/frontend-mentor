import Image from './Image';
import Faq from './FaqDiv';
import '../styles/Card.css'

export default function Card(props) {


    return (
        <div className='card'>
            <Image src={props.imageSource} smallBox={props.smallBox}></Image>
        
                <img className='small-box' src={props.smallBox}/>
           
            
            <Faq></Faq>
        </div>
    )
}
