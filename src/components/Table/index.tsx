import { Header, TableContent, Footer, Table } from './styles'
import bTable from '@/assets/icons/bTable.svg'
import type { Dispatch, SetStateAction, ReactNode } from 'react'

interface IGridProps {
  pageData: ReactNode[] // ✅
  header: string[]
  width: number
  filterData: unknown[]
  page: number
  setPage: Dispatch<SetStateAction<number>>
  columnsWidths?: number[]
  columnGap?: number
  rowHight?: number
}
interface IGridItem {
  children: any
}

function HeaderItem(props: IGridItem) {
  const { children } = props
  return (
    <button type="button" onClick={() => console.log('data')} className="grid-header">
      <span>{children}</span>
    </button>
  )
} // Renderiza os itens do header da tabela

export default function DataGridDemo(props: IGridProps) {
  const { pageData, header, filterData, page, setPage, columnsWidths, columnGap, width, rowHight } =
    props

  // Retirei a prop isFixed pois nao estava sendo utilizada

  const advanceTablePage = () => {
    if (page === Math.ceil(filterData.length / 10)) return

    setPage((oldValue) => oldValue + 1)
  }

  const backTablePage = () => {
    if (page === 1) return

    setPage((oldValue) => oldValue - 1)
  }

  // Seta o primeiro item do counter da pagina

  const pageSize = 10
  const totalPages = Math.ceil(filterData.length / pageSize)
  const total = filterData.length

  const start = (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)
  return (
    <Table $width={width}>
      <Header $columnNumber={header.length} $columnsWidths={columnsWidths}>
        {header.map((title, idx) => (
          <HeaderItem key={title ?? idx}>{title}</HeaderItem>
        ))}
      </Header>

      <TableContent
        $rowHight={rowHight}
        className="table-content"
        $columnNumber={header.length}
        $columnsWidths={columnsWidths}
        $columnGap={columnGap}
      >
        {pageData.map((row, rowIndex) => (
          <div className="table-row" key={rowIndex}>
            {row}
          </div>
        ))}
        {/* Retirei a prop isFixed pois nao estava sendo utilizada 
         {!isFixed && data.map((item: any) => item || <div>-</div>)} */}
      </TableContent>

      <Footer>
        <div className="counter" data-testid={`itens-counter`}>
          {`${start}–${end} de ${total}`}
        </div>

        <div className="right-container">
          <div data-testid={`page-counter`}>{`Página ${page}`}</div>
          <div className="pagination-container">
            <img
              className="table-chevron"
              alt="back table page"
              src={bTable}
              onClick={backTablePage}
              data-testid={`page-back-btn`}
            />
            <span data-testid={`page-min-max-counter`}>{`${page}/${totalPages}`}</span>
            <img
              className="table-chevron advance"
              alt="advance table page"
              src={bTable}
              onClick={advanceTablePage}
              data-testid={`page-advance-btn`}
            />
          </div>
        </div>
      </Footer>
    </Table>
  )
}
