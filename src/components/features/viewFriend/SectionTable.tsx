import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

interface ISectionTableProps {
  rows: { name: string; value: string }[]
}

const SectionTable = ({ rows }: ISectionTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="customized table">
        <TableBody sx={{ width: '100%' }}>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              <StyledTableCell
                sx={{ gridColumn: 'span 2 / span 2' }}
                component="th"
                scope="row"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell
                sx={{ gridColumn: 'span 1 / span 1' }}
                align="left"
              >
                {row.value}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SectionTable
