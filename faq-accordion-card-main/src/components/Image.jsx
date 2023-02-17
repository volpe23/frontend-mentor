import styled from 'styled-components';
import bg from '../../images/bg-pattern-desktop.svg';
import mobileBg from '../../images/bg-pattern-mobile.svg'
import mobile from '../../images/illustration-woman-online-mobile.svg';
import svgFull from '../../images/illustration-woman-online-desktop.svg';
import '../styles/Illustration.css';

export default function Image(props) {

    return (

        <div className="illustration">
            <picture>
                <source media='(max-width:900px)' srcset={mobile} />
                <source media='(min-width:900px)' srcset={svgFull} />
                <img src={mobile} />
                
            </picture>
            {/* <Img 
                src={mobile}
                srcSet={`${mobile} 300w, ${props.src} 900w`} 
                sizes='(max-width:300px) 300px, (max-width: 900px) 900px'
                /> */}
                
            <picture className='bg'>
                <source media='(max-width: 900px' srcset={mobileBg}/>
                <img src={bg} />
            </picture>
        </div>
    )
}

const Img = styled.img`
    position: static;
    
`
const Bg = styled.img`

`




