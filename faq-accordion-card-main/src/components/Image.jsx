import bg from '../../images/bg-pattern-desktop.svg';
import mobileBg from '../../images/bg-pattern-mobile.svg'
import mobile from '../../images/illustration-woman-online-mobile.svg';
import svgFull from '../../images/illustration-woman-online-desktop.svg';
import '../styles/Illustration.css';

export default function Image() {

    return (

        <div className="illustration">
            <picture>
                <source media='(max-width:900px)' srcset={mobile} />
                <source media='(min-width:900px)' srcset={svgFull} />
                <img src={mobile} />
                
            </picture>
                
            <picture className='bg'>
                <source media='(max-width: 900px' srcset={mobileBg}/>
                <img src={bg} />
            </picture>
        </div>
    )
}





