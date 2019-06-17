import React from 'react'
import Part from './Part'

const Content = ({content}) =>
{
return(
    <div>
        {content.map(parts =>
            <div key={parts.id}>
                    <Part name = {parts.name} exercises = {parts.exercises}/>
            </div>)}
    </div>)
}

export default Content
