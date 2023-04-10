import * as React from "react";
import { Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { calcularTrilhos, calcularLajotas, calcularSubTotalLaje } from "../functions/LajeCalculateMetrics"
import { calcularTijolos, calcularCimento, calcularAreia } from "../functions/ParedesCalculateMetrics"

function createData(etapa, inputs) {
  let detalhes = []
  if(etapa.includes("Laje")){
    detalhes = inputs.map(({width, length}) => {
    return {
      vao: `${width} x ${length}`,
      qtdTrilhos: calcularTrilhos(width, length).toFixed(2),
      tamTrilhos: width > length ? width : length,
      qtdLajotas: calcularLajotas(width, length).toFixed(2),
      subTotal: calcularSubTotalLaje(width, length).toFixed(2)
      }
    });
  }
  if(etapa.includes("Paredes")){
    console.log(inputs)
    detalhes = inputs.map(({height, width, length}) => {
      return {
        vao: `${height} x ${length}`,
        qtdTijolos: calcularTijolos(height, length),
        qtdCimento: calcularCimento(height, length).toFixed(2),
        qtdAreia: calcularAreia(height, length).toFixed(2),
        subTotal: calcularSubTotalLaje(width, length).toFixed(2)
        }
      });
  }

  return {
    total: detalhes.reduce((total, {subTotal} ) => total + Number(subTotal), 0).toFixed(2),
    etapa,
    inputs,
    detalhes
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row.etapa, "aqui");
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
          <TableCell align="left">{row.total}</TableCell>
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
                      <TableCell>Medidas Vão</TableCell>
                      <TableCell>Quantidade Trilhos</TableCell>
                      <TableCell align="right">Tamanho Trilhos</TableCell>
                      <TableCell align="right">Quantidade Lajotas</TableCell>
                      <TableCell align="right">SubTotal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detalhes.map((detalhesItem, index) => (
                      <TableRow key={`${row.etapa + index}`}>
                        <TableCell component="th" scope="row">
                          {detalhesItem.vao}
                        </TableCell>
                        <TableCell>{detalhesItem.qtdTrilhos}</TableCell>
                        <TableCell align="right">
                          {detalhesItem.tamTrilhos}
                        </TableCell>
                        <TableCell align="right">
                          {detalhesItem.qtdLajotas}
                        </TableCell>
                        <TableCell align="right">
                          {Math.round(detalhesItem.subTotal * 100) / 100}
                        </TableCell>
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
          <TableCell align="left">{row.total}</TableCell>
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
                      <TableCell align="right">Quantidade Cimento&nbsp;(saco)</TableCell>
                      <TableCell align="right">Quantidade Areia&nbsp;(m³)</TableCell>
                      <TableCell align="right">SubTotal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detalhes.map((detalhesItem, index) => (
                      <TableRow key={`${row.etapa + index}`}>
                        <TableCell component="th" scope="row">{detalhesItem.vao}</TableCell>
                        <TableCell align="center" >{detalhesItem.qtdTijolos}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdCimento}</TableCell>
                        <TableCell align="right">{detalhesItem.qtdAreia}</TableCell>
                        <TableCell align="right">{Math.round(detalhesItem.subTotal)}</TableCell>
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
};

export default function CollapsibleTable({list}) {

  const rows = list.map(({etapa, inputs}) => {
    return createData(`Orçamento ${etapa}`, inputs);  
  });
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Orçamento/Etapa</TableCell>
            <TableCell align="left">Total&nbsp;(R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
