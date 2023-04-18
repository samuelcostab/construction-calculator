import React from "react";
import { TextField } from "@mui/material";

function PopupInputs({ inputs, handleWidthChange, handleHeightChange, handleLengthChange, handleDepthChange }) {

  return (
    <div>
      {inputs ? (
        <div>
          {inputs.width && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Largura (m)"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleWidthChange}
            />
          )}
          {inputs.height && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Altura (m)"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleHeightChange}
            />
          )}
          {inputs.length && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comprimento (m)"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleLengthChange}
            />
          )}
          {inputs.depth && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Espessura (cm)"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleDepthChange}
            />
          )}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default PopupInputs;
