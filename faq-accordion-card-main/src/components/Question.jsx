import '../styles/Question.css'
import caret from '../../images/icon-arrow-down.svg'
import { ReactSVG } from "react-svg";

export default function Question(props) {


    return (
        <section className='question-block'>
            <div className={`question ${props.show ? 'shown' : ''}`} onClick={props.open}>
                <span>{props.question}</span><ReactSVG className='caret' src={caret}/>
            </div>
            <div className={`answer ${props.show ? 'shown' : ''}`}>{props.answer}</div>
        </section>
    )
}

