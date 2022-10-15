import { Grid, Input, NumberInput, PasswordInput, Select, SelectItem, TextInput, Tooltip } from '@mantine/core'
import { FloatingPosition } from '@mantine/core/lib/Floating'
import { ColSpan } from '@mantine/core/lib/Grid/Col/Col.styles'
import { UseForm } from '@mantine/form/lib/types'
import React, { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

export interface IInput {
  label?: React.ReactNode | undefined
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  description?: React.ReactNode | undefined
  getValue?: UseForm
  requireSymbol?: boolean | undefined
}

export interface IAutoComplete {
  label?: React.ReactNode | undefined
  placeholder?: string | undefined
  searchable?: boolean | undefined
  requireSymbol?: boolean | undefined
  icon?: React.ReactNode | undefined
  description?: React.ReactNode | undefined
  data?: (string | SelectItem)[]
  getValue?: UseForm
}

export interface IPasswordInput {
  label?: React.ReactNode | undefined
  placeholder?: string | undefined
  icon?: React.ReactNode | undefined
  description?: React.ReactNode | undefined
  requireSymbol?: boolean | undefined
  getValue?: UseForm
}

export interface INumberInput {
  label?: React.ReactNode | undefined
  placeholder?: string | undefined
  icon?: React.ReactNode | undefined
  description?: React.ReactNode | undefined
  requireSymbol?: boolean | undefined
  getValue?: UseForm
  min?: number | undefined
  max?: number | undefined
}

export interface IColumn {
  gridSpan?: ColSpan | undefined
  gridOrder?: number | undefined
  input?: IInput[]
  autoComplete?: IAutoComplete[]
  passwordInput?: IPasswordInput[]
  numberInput?: INumberInput[]
}

interface IAForm {
  column?: IColumn[]
}

export const AForm = ({ column }: IAForm) => {
  const [searchValue, onSearchChange] = useState('')
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 2,
  })
  return (
    <Grid>
      {column?.map((row: IColumn, key: number) => (
        <Grid.Col key={key} span={row.gridSpan || 'auto'} order={row.gridOrder}>
          {row.input?.map((r: IInput, k: number) => (
            <Input.Wrapper key={k} withAsterisk={r.requireSymbol || true} label={r.label} description={r.description}>
              <TextInput
                icon={r.icon}
                placeholder={r.placeholder}
                rightSection={
                  r.toolTip && (
                    <Tooltip label={r.toolTipLabel} position={r.toolTipPosition} withArrow>
                      <div>
                        <FiAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                      </div>
                    </Tooltip>
                  )
                }
                {...r.getValue}
              />
            </Input.Wrapper>
          ))}
          {row.autoComplete?.map((r: IAutoComplete, k: number) => (
            <Input.Wrapper key={k} withAsterisk={r.requireSymbol || true} label={r.label} description={r.description}>
              <Select
                icon={r.icon}
                placeholder={r.placeholder}
                searchable={r.searchable || true}
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                nothingFound="No options"
                data={r.data || ['React', 'Angular', 'Svelte', 'Vue']}
                {...r.getValue}
              />
            </Input.Wrapper>
          ))}

          {row.passwordInput?.map((r: IPasswordInput, k: number) => (
            <Input.Wrapper key={k} withAsterisk={r.requireSymbol || true} label={r.label} description={r.description}>
              <PasswordInput placeholder={r.placeholder} icon={r.icon} {...r.getValue} />
            </Input.Wrapper>
          ))}

          {row.numberInput?.map((r, k: number) => (
            <Input.Wrapper key={k} withAsterisk={r.requireSymbol || true} label={r.label} description={r.description}>
              <NumberInput min={r.min || 0} max={r.max} placeholder={r.placeholder} icon={r.icon} {...r.getValue} />
            </Input.Wrapper>
          ))}
        </Grid.Col>
      ))}
    </Grid>
  )
}
