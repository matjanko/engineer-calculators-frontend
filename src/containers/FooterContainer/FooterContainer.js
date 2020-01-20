import React from 'react'
import StyledFooter from '../../components/StyledFooter';

function FooterContainer() {

    const text = '2020 matjanko - Wszelkie prawa zastrzeżone';

    return (
        <div>
            <StyledFooter text={text}/>
        </div>
    )
}

export default FooterContainer;