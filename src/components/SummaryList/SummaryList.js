import * as React from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import Row from "./SummaryRow";
import { createRowData } from "../../context/PopupInputsDataProcessor";

export default function CollapsibleTable({list}) {
  const rows = list.map(({etapa, inputs}) => {
    return createRowData(`Orçamento ${etapa}`, inputs);  
  });
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Orçamento/Etapa</TableCell>
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
