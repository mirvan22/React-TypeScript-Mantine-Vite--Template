import { Table } from '@mantine/core'
import { useState } from 'react'

export declare namespace AppSuperTable {
  interface IAppSuperTable {
    TableRoot: ITableRoot[]
  }
  interface ITableRoot {
    key?: React.Key | null | undefined
    className?: string | undefined
    style?: React.CSSProperties | undefined
    ref?: React.Ref<HTMLTableElement> | undefined
    TableHeadRow: ITableHeadRow[]
    TableBodyRow: ITableBodyRow[]
  }
  interface ITableHeadRow {
    className?: string | undefined
    style?: React.CSSProperties | undefined
    ref?: React.LegacyRef<HTMLTableRowElement> | undefined
    TableHeader: ITableHeader[]
  }
  interface ITableHeader {
    className?: string | undefined
    style?: React.CSSProperties | undefined
    ref?: React.LegacyRef<HTMLTableHeaderCellElement> | undefined
    label?: React.ReactNode | undefined
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
    colSpan?: number | undefined
    rowSpan?: number | undefined
  }

  interface ITableBodyRow {
    className?: string | undefined
    style?: React.CSSProperties | undefined
    ref?: React.LegacyRef<HTMLTableRowElement> | undefined
    selected?: () => void | undefined
    TableColumn: ITableColumn[]
  }
  interface ITableColumn {
    className?: string | undefined
    style?: React.CSSProperties | undefined
    ref?: React.LegacyRef<HTMLTableDataCellElement> | undefined
    label: React.ReactNode
    width?: string | number | undefined
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
    colSpan?: number | undefined
    rowSpan?: number | undefined
  }
}

export const AppSuperTable = ({ TableRoot }: AppSuperTable.IAppSuperTable) => {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      {TableRoot.map((row) => (
        <Table key={row.key} className={row.className} style={row.style} ref={row.ref}>
          <thead>
            {row.TableHeadRow?.map((r, key) => (
              <tr key={key} className={r.className} style={r.style} ref={r.ref}>
                {r.TableHeader.map((table, tableKey) => (
                  <th
                    key={tableKey}
                    className={table.className}
                    style={table.style}
                    ref={table.ref}
                    align={table.align}
                    colSpan={table.colSpan}
                    rowSpan={table.rowSpan}
                  >
                    {table.label}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {row.TableBodyRow.map((r, k) => (
              <tr
                key={k}
                className={` ${k === active ? ' break--mantine--table--active ' : ' break--mantine--table--hover '} ${r.className}`}
                style={r.style}
                ref={r.ref}
                onClick={() => {
                  setActive(k)
                  r.selected?.()
                }}
              >
                {r.TableColumn?.map((col, colKey) => (
                  <td
                    key={colKey}
                    className={` table-color  ${col.className} `}
                    style={{ fontWeight: colKey === 0 ? 700 : 200, ...col.style }}
                    ref={col.ref}
                    width={col.width}
                    align={col.align}
                    colSpan={col.colSpan}
                    rowSpan={col.rowSpan}
                  >
                    {col.label}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  )
}
