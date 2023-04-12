import React, { useState } from "react";
import { 
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box 
} from "@mui/material";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import textResource from "../resources/popupTextResouces.json"

function Popup({ onHandleCalcSubmit }) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [option, setOption] = useState('');

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  
  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOption('');
    setWidth(0);
    setHeight(0);
    setLength(0);
  };

  const handleSubmit = (e) => {
    if (width > 0 || height > 0 || length > 0) {
      onHandleCalcSubmit(e, { etapa: option, inputs:[{ width, height, length }]});
      handleClose();
    }    
  };

  const handleOptionsSelectChange = (event) => {
    setOption(
      event.target.value,
    );
  };

  const _renderInputs = (selectedOption) => {
    if (selectedOption === 'Laje') {
      return (
        <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Largura do Vão"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleWidthChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comprimento do Vão"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleLengthChange}
            />
        </div>
      );
    }
    if (selectedOption === 'Paredes') {
      return (
        <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Altura do Vão"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleHeightChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comprimento do Vão"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleLengthChange}
            />
        </div>
      );
    }
  }

  const _renderMenuItems = () => {
    const items = ["Fundação", "Piso", "Paredes", "Laje", "Cobertura", "Instalações Elétricas", "Instalações Hidraulicas", "Reboco", "Forro", "Emassamento de Paredes", "Pintura"]
    return items.map((item, index) => {
      return (
        <MenuItem value={item} key={index}>{item}</MenuItem>
      );
      
    }); 
  }

  return (
    <div>
      <Button
        variant="outfiled"
        onClick={handleClickOpen}
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
          position: "relative",
          left: "55%"
        }}
      >
        {textResource.mainButtonTitle}
        <AddCircleOutlineIcon fontSize="large"/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{textResource.popupHeaderTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {textResource.popupSubTitle}
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">{textResource.optionsTitle}</InputLabel>
              <Select
                autoFocus
                value={option}
                onChange={handleOptionsSelectChange}
                label="options"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                {_renderMenuItems()}
              </Select>
            </FormControl>
          </Box>
          {_renderInputs(option)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{textResource.cancelButtonTitle}</Button>
          <Button onClick={handleSubmit}>{textResource.confirmButtonTitle}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Popup;
