import {
  ColProps,
  Grid,
  GridProps,
  Input,
  InputWrapperProps,
  MantineNumberSize,
  NumberInput,
  NumberInputProps,
  PasswordInput,
  PasswordInputProps,
  Select,
  SelectItem,
  SelectProps,
  Sx,
  TextInput,
  TextInputProps,
  Tooltip,
} from '@mantine/core'
import { FloatingPosition } from '@mantine/core/lib/Floating'
import { ColSpan } from '@mantine/core/lib/Grid/Col/Col.styles'
import { UseForm } from '@mantine/form/lib/types'
import React, { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { IClassSx } from '../Interface/IClassSx'

interface IWrapper {
  inputWrapperClassName?: string | undefined
  inputWrapperSx?: Sx | (Sx | undefined)[] | undefined
  label?: React.ReactNode | undefined
  description?: React.ReactNode | undefined
  requireSymbol?: boolean | undefined
  inputWrapperProps?: InputWrapperProps
}

export interface IInput extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  props?: TextInputProps
  getValue?: UseForm
}

export interface IAutoComplete extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  searchable?: boolean | undefined
  data?: (string | SelectItem)[]
  props?: SelectProps
  getValue?: UseForm
}

export interface IPasswordInput extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  props?: PasswordInputProps
  getValue?: UseForm
}

export interface INumberInput extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  min?: number | undefined
  max?: number | undefined
  props?: NumberInputProps
  getValue?: UseForm
}

export interface IColumn extends Omit<IClassSx, 'style'> {
  colspan?: ColSpan | undefined
  order?: number | undefined
  input?: IInput[]
  autoComplete?: IAutoComplete[]
  passwordInput?: IPasswordInput[]
  numberInput?: INumberInput[]
  props?: ColProps
}

export interface IGridRoot {
  column: IColumn[]
  gutter?: MantineNumberSize | undefined
  margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  props?: GridProps
  className?: string | undefined
  sx?: Sx | (Sx | undefined)[] | undefined
}

export interface IAppGrid {
  gridRoot: IGridRoot[]
}

export const AppGrid = ({ gridRoot }: IAppGrid) => {
  const [searchValue, onSearchChange] = useState('')
  return (
    <>
      {gridRoot.map((row, key) => (
        <Grid key={key} m={row.margin || 5} gutter={row.gutter || 'sm'} className={row.className} sx={row.sx} {...row.props}>
          {row.column?.map((col: IColumn, colKey: number) => (
            <Grid.Col key={colKey} span={col.colspan || 'auto'} order={col.order} className={col.className} sx={col.sx} {...col.props}>
              {col.input?.map((r: IInput, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <TextInput
                    className={r.className}
                    sx={r.sx}
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
                    {...r.props}
                    {...r.getValue}
                  />
                </Input.Wrapper>
              ))}
              {col.autoComplete?.map((r: IAutoComplete, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <Select
                    className={r.className}
                    sx={r.sx}
                    icon={r.icon}
                    placeholder={r.placeholder}
                    searchable={r.searchable || true}
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    nothingFound="No options"
                    data={r.data || ['React', 'Angular', 'Svelte', 'Vue']}
                    rightSection={
                      r.toolTip && (
                        <Tooltip label={r.toolTipLabel} position={r.toolTipPosition} withArrow>
                          <div>
                            <FiAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                          </div>
                        </Tooltip>
                      )
                    }
                    {...r.props}
                    {...r.getValue}
                  />
                </Input.Wrapper>
              ))}

              {col.passwordInput?.map((r: IPasswordInput, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <PasswordInput className={r.className} sx={r.sx} placeholder={r.placeholder} icon={r.icon} {...r.props} {...r.getValue} />
                </Input.Wrapper>
              ))}

              {col.numberInput?.map((r: INumberInput, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <NumberInput
                    className={r.className}
                    sx={r.sx}
                    min={r.min || 0}
                    max={r.max}
                    placeholder={r.placeholder}
                    icon={r.icon}
                    {...r.props}
                    {...r.getValue}
                  />
                </Input.Wrapper>
              ))}
            </Grid.Col>
          ))}
        </Grid>
      ))}
    </>
  )
}
