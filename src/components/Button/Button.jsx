import React from 'react'

const Button = (props) => {
    return (
        <button {...props} calassName={'button' + props.cl}/>
    )
}

export default Button; 