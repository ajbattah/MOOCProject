import React from 'react'

const Total = ({parts}) => {
    const total = parts.reduce((sum, prt)=> sum + prt.exercises, 0)
    return(<p><b>total is {total} exercises</b></p>)}

export default Total