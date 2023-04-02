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

function createData(etapa, total) {
  //calcular total atravez dos subTotais
  return {
    total,
    etapa,
    detalhes: [
      {
        vao: "2,5 x 4,5",
        qtdTrilhos: 6,
        tamTrilhos: 4.5,
        qtdLajotas: 355,
        subTotal: 400,
      },
      {
        vao: "4,5 x 5,5",
        qtdTrilhos: 16,
        tamTrilhos: 5.5,
        qtdLajotas: 655,
        subTotal: 400, 
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
};

const rows = [
  createData("Orçamento Laje", "R$ 10.500,00"),
  createData("Orçamento Forro", "R$ 12.500,00"),
  createData("Orçamento Fundação", "R$ 13.500,00"),
];

export default function CollapsibleTable({list}) {

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

//   `Quantidade de Trilhos:
//   ${measurement ? calcularTrilhos(measurement.width, measurement.height).toFixed(2): "Nao pegou o valor" }
//   \nQuantidade de Lajotas:
//   ${measurement ? calcularLajotas(measurement.width, measurement.height).toFixed(2): "Nao pegou o valor" }`
//   }
// secondary={`Para o vão de: ${measurement.width}m X  ${measurement.height}m`}