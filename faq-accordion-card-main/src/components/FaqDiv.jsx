import { useState } from 'react';
import '../styles/Faq.css';
import Question from './Question';

export default function Faq() {

    const [shown, setShow] = useState(null)

    const open = (i) => {
        if (shown === i) setShow(null);
        else setShow(i) 
        
    }

    return (
        <article className='faqs'>
            <h1>FAQ</h1>
            {questions.map((question, i) => {
                 
                return <Question key={i} open={() => open(i)} show={shown === i ? true : false} question={question.q} answer={question.a} />
            })}
        </article>
    )
}

const questions = [
    {
        q: 'How many team members can I invite?',
        a: `You can invite up to 2 additional users on the Free plan. There is no limit on 
        team members for the Premium plan.`
    },
    {
        q: `What is the maximum file upload size?`,
        a: `No more than 2GB. All files in your account must fit your allotted storage space.`
    },
    {
        q: `How do I reset my password?`,
        a: `Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.`
    },
    {
        q: `Can I cancel my subscription?`,
        a: `Yes! Send us a message and we'll process your request no questions asked.`
    },
    {
        q: `Do you provide additional support?`,
        a: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`
    }
]