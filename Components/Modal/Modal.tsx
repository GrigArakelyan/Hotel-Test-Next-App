import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BasicDatePicker from '../DatePicker/DatePicker';
import Button from '../Button/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: '#F3F3F3',
  border: 'none',
  borderRadius: '10px' ,
  boxShadow: 24,
  p: 4,
};
const styleBox = {
   marginTop: '10%',
   marginBottom: '10%',
   marginLeft: '15%',
   marginRight: '15%',
   border: 'none',
}
const styleButton = {
   width: '50%',
   marginTop: '10%',
   marginBottom: '10%',
   marginLeft: '25%',
   marginRight: '25%',
   border: 'none',
}

type BasicModalProps = {
   handleClose: () => void
   open: boolean
   control: any
   name: string;
}

const BasicModal:React.FC<BasicModalProps> = ({handleClose, open, control, name}) => {

   const saveDate = () => {
      handleClose()
   }

  return ( 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={styleBox}>
               <BasicDatePicker control={control} name={name}/>
            </Box>
            <Box sx={styleButton}>
               <Button title='Save' type='button' onClick={saveDate}/>
            </Box>
        </Box>
      </Modal>
  );
}

export default BasicModal