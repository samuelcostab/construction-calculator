import React from "react";
import { Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  
  if (row.etapa.includes("Laje")){
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell component="th" scope="row">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {row.etapa}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {row.etapa}
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Medidas Vão</TableCell>
                      <TableCell>Quantidade Trilhos</TableCell>
                      <TableCell align="right">Tamanho Trilhos&nbsp;(m)</TableCell>
                      <TableCell align="right">Quantidade Lajotas</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detalhes.map((detalhesItem, index) => (
                      <TableRow key={`${row.etapa + index}`}>
                        <TableCell component="th" scope="row">{detalhesItem.vao}</TableCell>
                        <TableCell align="center">{detalhesItem.qtdTrilhos}</TableCell>
                        <TableCell align="right">{detalhesItem.tamTrilhos}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdLajotas}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  if (row.etapa.includes("Paredes")){
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell component="th" scope="row">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {row.etapa}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {row.etapa}
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" >Medidas Vão</TableCell>
                      <TableCell>Quantidade Tijolos</TableCell>
                      <TableCell align="right">Quantidade Cimento&nbsp;(saco/kg)</TableCell>
                      <TableCell align="right">Quantidade Areia&nbsp;(m³)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detalhes.map((detalhesItem, index) => (
                      <TableRow key={`${row.etapa + index}`}>
                        <TableCell component="th" scope="row">{detalhesItem.vao}</TableCell>
                        <TableCell align="center">{detalhesItem.qtdTijolos}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdCimento}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdAreia}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  if (row.etapa.includes("Contra-Piso") || row.etapa.includes("Reboco")){
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell component="th" scope="row">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {row.etapa}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {row.etapa}
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" >Medidas Vão</TableCell>
                      <TableCell align="right">Quantidade Cimento&nbsp;(saco)</TableCell>
                      <TableCell align="right">Quantidade Areia&nbsp;(m³)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detalhes.map((detalhesItem, index) => (
                      <TableRow key={`${row.etapa + index}`}>
                        <TableCell component="th" scope="row">{detalhesItem.vao}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdCimento}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdAreia}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}