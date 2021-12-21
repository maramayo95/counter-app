import React , { useState} from 'react'
import PropTypes from 'prop-types'
import './index.css'


const CounterApp = ({value}) => {
    
    const [ counter , setCounter ] = useState(value);


    const sumar = () => {
         setCounter ( counter + 1 )
    }

    
    
    const restar = () => {
        setCounter (counter -1)
    }

    const resetear = () => {
        setCounter (value)
    }    

    return (
        <div>
            <h1>CounterAPP</h1>
            <h2> {counter}</h2>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}> -1 </button>
            <button onClick={resetear}>Reset</button>
        </div>
     )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
