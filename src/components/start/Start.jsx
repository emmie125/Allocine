import React, {useState}from 'react'
import { Rating, Ref } from 'semantic-ui-react'



export const Start = ({min}) => {
 
  return (
    <>
       <Rating maxRating={10} rating={min} defaultRating={1}  icon='star' size='huge' />
    </>
  )
}
