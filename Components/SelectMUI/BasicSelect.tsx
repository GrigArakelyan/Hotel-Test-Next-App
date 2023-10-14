import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

type SelectProps = {
  control: any
  name: string;
}

const BasicSelect:React.FC<SelectProps> = ({control, name}) => {

  const selectValue:string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  return (
    <Box sx={{ minWidth: 65 }}>
      <Controller  
          name={name.toLowerCase()}
          defaultValue={'0'}
          control={control}
          render={({ field }) => ( 
          <Select sx={{
            "& fieldset": {
              border: "none",
            },
          }}
            {...field}
            id={name}
          >
          {selectValue.map((value) => (
            <MenuItem sx={{border: "none"}} key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      )}/>
    </Box>
  );
}
export default BasicSelect


            