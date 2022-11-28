import { Checkbox as MUICheckbox, FormControlLabel } from "@mui/material"

export const Checkbox = (props => {
  return (
    <FormControlLabel sx={{textAlign:'left'}} labelPlacement='right' fontFamily='Courier New, serif' label={props.label} control={<MUICheckbox   size='large' sx={{ '& .MuiSvgIcon-root': { fontSize: '32px',fontFamily:'Courier New, serif' }, color: 'white',
    '&.Mui-checked': {
      color: 'darkred',
    }, }}/>} />
    
  )
})
