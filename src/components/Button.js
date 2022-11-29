import { Button as MUIButton } from "@mui/material"
import React from "react"

export const Button = (props) => {
  return (
    <MUIButton {...props} sx={{
      backgroundColor: props.variant === 'outlined' ? 'transparent' : 'darkred',
      borderColor: props.variant === 'outlined' ? 'darkred' : 'red',
      color: 'white',
      p: '10px',
      m: '10px',
      fontSize: '20px',
      flexFlow: 'column-wrap',
      fontFamily: 'Courier New,serif',
      textTransform: 'none',
      fontWeight: 'bold',
      borderWidth:'2px',
      "&.MuiButtonBase-root:hover": {
        bgcolor: "red",
        color: 'white',
        border: '2px solid red'
              }
    } } />
)
}
