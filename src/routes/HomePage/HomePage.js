import React from 'react'
import CalculatorsList from '../../components/CalculatorsList'
import calculators from '../../constants/calculators'

function HomePage() {

    return (
        <div>
            <CalculatorsList calculators={calculators}/>
        </div>
    )
}

export default HomePage;