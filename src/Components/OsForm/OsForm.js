// React:
import React from 'react';

// Material UI:
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Components:
import Verify from './Steps/Verify';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <IconButton onClick={handleClickOpen}>
        <AddCircleIcon fontSize="large" />
      </IconButton>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Verify close={handleClose}/>
      </Dialog>
    </div>
  );
}
