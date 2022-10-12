import { Table } from '@mantine/core'

export interface ITableRootTR {
  className?: any
  name?: any
  TH: ITableRootTH[]
}

export interface ITableRootTH {
  label: any
  className?: any
}

export interface IMTableRoot {
  children?: any
  hoverHighLight?: boolean
  TR: ITableRootTR[]
}

export interface ITD {
  label: any
  className?: any
}

export interface ITableChildTR {
  className?: any
  TD: ITD[]
}

export interface IMTableChild {
  TR: ITableChildTR[]
}

export const MTabelRoot = ({ children, hoverHighLight = false, TR }: IMTableRoot) => {
  return (
    <Table highlightOnHover={hoverHighLight}>
      <thead>
        {TR.map((row: ITableRootTR) => (
          <tr key={row.name} className={row.className}>
            {row.TH.map((r: ITableRootTH, k: number) => (
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

export const MTableChild = ({ TR }: IMTableChild) => {
  return (
    <>
      {TR.map((row: ITableChildTR, key: number) => (
        <tr key={key} className={row.className}>
          {row.TD.map((r: ITD, k: number) => (
            <td key={k} className={r.className}>
              {r.label}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
