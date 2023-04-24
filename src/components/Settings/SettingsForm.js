import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const blockValues = [
  {
    value: 6,
    label: '6 furos',
  },
  {
    value: 8,
    label: '8 furos',
  }
];

export default function SettingsForm({ setSettings }) {

  const handleSettingsSelection = (e) => {
    setSettings(e)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Configurações</h2>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Tijolo"
          defaultValue={8}
          helperText="Selecione uma opção"
        >
          {blockValues.map((option) => (
            <MenuItem key={option.value} value={option.value} onChange={handleSettingsSelection}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}