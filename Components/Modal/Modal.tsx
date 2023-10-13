import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BasicDatePicker from '../DatePicker/DatePicker';
import Button from '../Button/Button';
import Style from "./modal.module.scss"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: "10px" ,
  boxShadow: 24,
  p: 4,
};

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
            <div className={Style.center}>
               <BasicDatePicker control={control} name={name}/>
            </div>
            <div className={Style.button}>
               <Button title='Save' type='button' onClick={saveDate}/>
            </div>
        </Box>
      </Modal>
  );
}

export default BasicModal