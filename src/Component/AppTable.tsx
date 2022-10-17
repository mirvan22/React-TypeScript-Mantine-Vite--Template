import { Table } from '@mantine/core'
import { useState } from 'react'
import { CatEmptyLottie } from '../Assets/Lottie/CatEmptyLottie'

export interface ITableHeadRow {
  className?: string | undefined
  name?: string | undefined
  TableHead: ITableHead[] | undefined
}

export interface ITableHead {
  label: React.ReactNode
  className?: string | undefined
}

export interface IAppTable {
  children?: JSX.Element | JSX.Element[]
  hoverHighLight?: boolean
  TableRow: ITableHeadRow[] | undefined
  ref?: React.Ref<HTMLTableElement> | undefined
}

export const AppTable = ({ children, hoverHighLight = false, TableRow: TR, ref }: IAppTable) => {
  return (
    <Table ref={ref} highlightOnHover={hoverHighLight} verticalSpacing="md">
      <thead>
        {TR?.map((row: ITableHeadRow) => (
          <tr
            key={row.name}
            className={row.className}
            style={{ position: 'sticky', top: 0, backgroundColor: 'white', boxShadow: '0 1px 10px rgba(0,0,0,0.2)' }}
          >
            {row.TableHead?.map((r: ITableHead, k: number) => (
              <th key={k} className={r.className}>
                {r.label}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {children}
    </Table>
  )
}

export interface IAppTableBodyColumn {
  label: any
  className?: any
}

export interface IAppTableBodyRow {
  className?: any
  Column: IAppTableBodyColumn[] | undefined
  selected?: () => void | undefined
}

export interface IAppTableBody {
  TableBodyRow: IAppTableBodyRow[] | undefined
  data?: boolean
}

export const AppTableBody = ({ TableBodyRow: TR, data = false }: IAppTableBody) => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <tbody>
      {data ? (
        <tr>
          <td colSpan={99}>
            <CatEmptyLottie />
          </td>
        </tr>
      ) : (
        TR?.map((row: IAppTableBodyRow, key: number) => (
          <tr
            key={key}
            className={key === active ? ' break--mantine--table--active ' : ' break--mantine--table--hover '}
            onClick={() => {
              setActive(key)
              row.selected?.()
            }}
          >
            {row.Column?.map((r: IAppTableBodyColumn, k: number) => (
              <td key={k} className={` table-color  ${r.className}`} style={{ fontWeight: k === 0 ? 700 : 200 }}>
                {r.label}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  )
}
