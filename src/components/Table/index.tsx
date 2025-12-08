import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { Header, TableContent, Footer, Table } from './styles'
import bTable from '@/assets/icons/bTable.svg'

interface TableRowData {
  [key: string]: any
}

interface IGridProps {
  pageData: TableRowData[]
  header: string[]
  width?: number
  filterData: TableRowData[]
  page: number
  setPage: Dispatch<SetStateAction<number>>
  columnsWidths?: number[]
  columnGap?: number
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
  const { pageData, header, filterData, page, setPage, columnsWidths, columnGap } = props
  const [firstItemPage, setFirstItemPage] = useState<number>(0)
  // Retirei a prop isFixed pois nao estava sendo utilizada

  const advanceTablePage = () => {
    if (page === Math.ceil(filterData.length / 10)) return

    setPage((oldValue) => oldValue + 1)
  }

  const backTablePage = () => {
    if (page === 1) return

    setPage((oldValue) => oldValue - 1)
  }

  useEffect(() => {
    setFirstItemPage(page * 10 - 10)
  }, [filterData])
  // Seta o primeiro item do counter da pagina

  if (!filterData.length) return null

  return (
    <Table>
      <Header columnNumber={header.length} columnsWidths={columnsWidths}>
        {header.map((title) => (
          <HeaderItem>{title}</HeaderItem>
        ))}
      </Header>

      <TableContent
        className="table-content"
        columnNumber={header.length}
        columnsWidths={columnsWidths}
        columnGap={columnGap}
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
          {`${firstItemPage > 0 ? `${firstItemPage + 1}` : '1'}-${
            firstItemPage + 10 > filterData?.length ? pageData?.length : firstItemPage + 10
          } de ${filterData?.length}`}
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
            <span data-testid={`page-min-max-counter`}>{`${page}/${Math.ceil(
              filterData.length / 10
            )}`}</span>
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
