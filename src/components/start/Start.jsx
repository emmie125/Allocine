import React, {useState}from 'react'
import { Rating, Ref } from 'semantic-ui-react'
import styled from 'styled-components'



export const Start = ({min,className}) => {
 
  return (
    <>
       <Rating maxRating={10} rating={min}  icon='star' size='huge' background="red " className={className} disabled/>
    </>
  )
}
