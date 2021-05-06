import React from 'react'
import { TitleStyle } from './TitleStyle'

export const Title = (props) => {
    return (
        <TitleStyle>
            <h2>{props.title}</h2>
            
        </TitleStyle>
    )
}
