import React from 'react'
import { DataTable,TableContainer,TableHead,TableHeader,TableRow,TableBody,TableCell,Table } from 'carbon-components-react';

function ResultTable(props) {
    
  return (
    <DataTable rows={props.rowData} headers={props.headerData}>
  {({ rows, headers, getHeaderProps, getTableProps }) => (
    <TableContainer title="Datos agregados:">
      <Table {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {row.cells.map((cell) => (
                <TableCell key={cell.id}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</DataTable>
  )
}

export default ResultTable