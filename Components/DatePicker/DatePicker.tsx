import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';


type BasicDateProps = {
  control: any;
  name: string;
}

const BasicDatePicker:React.FC<BasicDateProps> = ({control, name}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" 
        { ...field }/>
      </DemoContainer>
    </LocalizationProvider>
    )}/>  
  );
}

export default BasicDatePicker


              