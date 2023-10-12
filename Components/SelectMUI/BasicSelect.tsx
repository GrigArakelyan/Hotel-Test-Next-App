import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';

type SelectProps = {
  control: any
  name: string;
}
const BasicSelect:React.FC<SelectProps> = ({control, name}) => {
  const [value, setValue] = React.useState<string>()

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const selectValue:string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <Box sx={{ minWidth: 65, border: "none"  }}>
      <Controller  
          name={name.toLowerCase()}
          control={control}
          render={({ field }) => ( 
          <Select sx={{border: "none"}}
            {...field}
            onChange={handleChange}
            value={value}
            id={name}
        >
          {selectValue.map((value) => (
            <MenuItem sx={{border: "none"}} value={value}>{value}</MenuItem>
          ))}
        </Select>
      )}/>
    </Box>
  );
}
export default BasicSelect


            