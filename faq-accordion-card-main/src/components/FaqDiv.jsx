import styled from 'styled-components';

export default function Faq() {

    return (
        <FaqDiv>
            <H3>FAQ</H3>
        </FaqDiv>
    )
}

const FaqDiv = styled.div`
    /* height: 100%; */
    flex: 1;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 60px;
    padding-left: 0;
`

const H3 = styled.h1`
    color: hsl(238, 29%, 16%);
    font-weight: 700;
`