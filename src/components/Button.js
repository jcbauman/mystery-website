import { Button as MUIButton } from "@mui/material"
import React from "react"

export const Button = (props) => {
  return (
    <MUIButton {...props} sx={{ backgroundColor: 'darkred', p: '10px', m: '10px' ,fontSize: '20px',flexFlow:'column-wrap',fontFamily:'Courier New,serif',textTransform: 'none'
    } } />
)
}
