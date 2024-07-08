import React from 'react'
import { columns, data } from './Data'
import styled from 'styled-components'


const MyDiv = styled.div`
padding-left: 3%;
padding-top: 3%;
`
const TableContainer = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 20%;
`
const TableHeader = styled.th`
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`

const TableData = styled.td`
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const Table = () => {
  return (
 <MyDiv>
   <TableContainer>
     <thead>
        <tr>
          {columns.map((column) => (
            <TableHeader key={column.key}>{column.label}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <TableData key={`${row.id}-${column.key}`}>{row[column.key]}</TableData>
            ))}
          </tr>
        ))}
      </tbody>
   </TableContainer>
 </MyDiv>
  )
}

export default Table
