import { Table } from '@mantine/core'

export interface ITableTR {
  className?: any
  name?: any
  TH: ITableTH[]
}

export interface ITableTH {
  label: any
  className?: any
}

export interface IATable {
  children?: any
  hoverHighLight?: boolean
  TableHeader: ITableTR[]
}

export const ATable = ({ children, hoverHighLight = false, TableHeader: TR }: IATable) => {
  return (
    <Table highlightOnHover={hoverHighLight}>
      <thead>
        {TR.map((row: ITableTR) => (
          <tr key={row.name} className={row.className}>
            {row.TH.map((r: ITableTH, k: number) => (
              <th key={k} className={r.className}>
                {r.label}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>{children}</tbody>
    </Table>
  )
}

export interface ITableBodyTD {
  label: any
  className?: any
}

export interface ITableBodyTR {
  className?: any
  TD: ITableBodyTD[]
}

export interface IATableBody {
  TableBody: ITableBodyTR[]
}

export const ATableBody = ({ TableBody: TR }: IATableBody) => {
  return (
    <>
      {TR.map((row: ITableBodyTR, key: number) => (
        <tr key={key} className={row.className}>
          {row.TD.map((r: ITableBodyTD, k: number) => (
            <td key={k} className={r.className}>
              {r.label}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
