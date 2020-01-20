import React from 'react'
import StyledAppBar from '../../components/StyledAppBar';


function HeaderContainer() {

    const headerTitle = 'KALKULATORY';

    return (
        <div>
            <StyledAppBar title={headerTitle}/>
        </div>
    )
}

export default HeaderContainer;