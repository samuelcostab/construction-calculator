import React, { useState } from "react";
import { 
  Button,
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
import PopupInputs from "./PopupInputs";
import textResource from "../resources/popupTextResouces.json"

function Popup({ onHandleCalcSubmit }) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [depth, setDepth] = useState(0);
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

  const handleDepthChange = (e) => {
    setDepth(e.target.value);
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
      onHandleCalcSubmit(e, { etapa: option, inputs:[{ width, height, length, depth }]});
      handleClose();
    }    
  };

  const handleOptionsSelectChange = (event) => {
    setOption(
      event.target.value,
    );
  };

  const _renderInputs = (option) => {
    const optionsMapper = {
      'Laje': {
        width: true,
        length: true
      },
      'Paredes': {
        length: true,
        height: true
      },
      'Contra-Piso': {
        width: true,
        length: true,
        depth: true,
      },
    }
    return <PopupInputs 
            inputs={optionsMapper[option]}
            handleWidthChange={handleWidthChange}
            handleHeightChange={handleHeightChange}
            handleLengthChange={handleLengthChange}
            handleDepthChange={handleDepthChange}
            />
  }
  const _renderMenuItems = () => {
    // "Fundação", "Cobertura", "Instalações Elétricas", "Instalações Hidraulicas", "Reboco", "Forro", "Emassamento de Paredes", "Pintura"
    const items = ["Contra-Piso", "Paredes", "Laje"]
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
