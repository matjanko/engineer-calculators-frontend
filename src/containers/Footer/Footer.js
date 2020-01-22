import React from 'react'
import StyledFooter from '../../components/StyledFooter';

function Footer() {

    const text = '2020 matjanko - Wszelkie prawa zastrzeżone';

    return (
        <div>
            <StyledFooter text={text}/>
        </div>
    )
}

export default Footer;