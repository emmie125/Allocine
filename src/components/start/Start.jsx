import React from 'react'
import { Rating } from 'semantic-ui-react'



export const Start = ({min,className}) => {
 
  return (
    <>
       <Rating maxRating={10} rating={min}  icon='star' size='huge' background="red " className={className} disabled/>
    </>
  )
}
