import React from 'react'
import Header from './Header'
import Total from './Total'
import Content from './Content'

const Course = ({course}) => {
    return(
        <div>
        {course.map(course => 
            <div key={course.id}>
                <Header title = {course.name} />
                <Content content = {course.parts} />
                <Total parts = {course.parts} /> 
            </div>
        )}
        </div>) }

export default Course