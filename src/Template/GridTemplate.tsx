import {
  Box,
  BoxProps,
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
  Switch,
  SwitchProps,
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
import { AppButton } from '../Component/AppButton'

interface IWrapper {
  inputWrapperClassName?: string | undefined
  inputWrapperSx?: Sx | (Sx | undefined)[] | undefined
  label?: React.ReactNode | undefined
  description?: React.ReactNode | undefined
  requireSymbol?: boolean | undefined
  inputWrapperProps?: InputWrapperProps
}

interface IInput extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  props?: TextInputProps
  getValue?: UseForm
}

interface IAutoComplete extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  searchable?: boolean | undefined
  data?: (string | SelectItem)[]
  props?: Omit<SelectProps, 'data' | 'children'>
  getValue?: UseForm
}

interface IPasswordInput extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  props?: PasswordInputProps
  getValue?: UseForm
}

interface INumberInput extends IWrapper, Omit<IClassSx, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  min?: number | undefined
  max?: number | undefined
  props?: NumberInputProps
  getValue?: UseForm
}

interface IAppButton extends Omit<IClassSx, 'style' | 'className'> {
  disabled?: boolean | undefined
  color?: 'success' | 'primary' | 'danger'
  CrudActionOpenModal?: JSX.Element | JSX.Element[] | undefined
  icon?: React.ReactNode
  label?: React.ReactNode
  onClick?: () => void | undefined
}

interface ISwitch {
  label?: React.ReactNode
  props?: SwitchProps
  getValue?: UseForm
}

interface IBox extends Omit<IClassSx, 'style'> {
  child?: JSX.Element | JSX.Element[] | undefined
  props?: BoxProps
}

interface IColumn extends Omit<IClassSx, 'style'>, IColumnDocumentation {
  colspan: ColSpan
  order?: number | undefined
  TextInput?: IInput[]
  AutoComplete?: IAutoComplete[]
  PasswordInput?: IPasswordInput[]
  NumberInput?: INumberInput[]
  AppButton?: IAppButton[]
  Switch?: ISwitch[]
  Box?: IBox[]
  props?: ColProps
}

interface IGridRoot extends Omit<IClassSx, 'style'>, Omit<IGridRootDocumentation, 'margin'> {
  GridCol: IColumn[]
  gutter?: MantineNumberSize | undefined
  margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | undefined
  props?: GridProps
}

export interface IGridTemplate {
  GridRoot: IGridElements[]
}

export const GridTemplate = ({ GridRoot }: IGridTemplate) => {
  const [searchValue, onSearchChange] = useState('')
  return (
    <>
      {GridRoot.map((row, key) => (
        <Grid key={key} m={row.margin} gutter={row.gutter || 'sm'} className={row.className} sx={row.sx} {...row.props}>
          {row.GridCol?.map((col: IColumn, colKey: number) => (
            <Grid.Col key={colKey} span={col.colspan || 'auto'} order={col.order} className={col.className} sx={col.sx} {...col.props}>
              {col.TextInput?.map((r: IInput, k: number) => (
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
              {col.AutoComplete?.map((r: IAutoComplete, k: number) => (
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

              {col.PasswordInput?.map((r: IPasswordInput, k: number) => (
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

              {col.NumberInput?.map((r: INumberInput, k: number) => (
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

              {col.AppButton?.map((r: IAppButton, k: number) => (
                <AppButton
                  key={k}
                  sx={r.sx}
                  disabled={!r.disabled || false}
                  color={r.color}
                  CrudActionOpenModal={r.CrudActionOpenModal}
                  icon={r.icon}
                  label={r.label}
                  onClick={() => r.onClick?.()}
                />
              ))}

              {col.Switch?.map((r, k) => (
                <Switch key={k} label={r.label} {...r.props} {...r.getValue} />
              ))}

              {col.Box?.map((r, k: number) => (
                <Box key={k} className={r.className} sx={r.sx} {...r.props}>
                  {r.child}
                </Box>
              ))}
            </Grid.Col>
          ))}
        </Grid>
      ))}
    </>
  )
}

/**
 * `GridRoot`. Required column
 * @example
 * Example(1)
const example:IGrid[] =[
    {
      column: [    ---> <Grid.Col/> Mantine
        {
          colspan: 12, ---> REQUIRED(),
          input: [
            {
              label: 'Username',
              description: 'Username is required!',
              placeholder: 'Your Username',
              icon: <FaUserCircle size={20} />,
              getValue: form.getInputProps('username'),
            },
            {
              label: 'Password',
              description: 'password is required!',
              placeholder: 'Your password',
              icon: <FaKey size={20} />,
              getValue: form.getInputProps('password'),
            },
          ],
        },
        {
          colspan: 6,
          autoComplete: [
            {
              label: 'Role',
              description: 'Role is required!',
              placeholder: 'Role',
              icon: <AiOutlineKey size={20} />,
              data: ['Admin', 'Super User', 'User'],
              getValue: form.getInputProps('role'),
            },
          ],
        },
        {
          colspan: 6,
          numberInput: [
            {
              label: 'Example Number Input',
              description: 'Example',
              icon: <FaSortNumericDown size={20} />,
              getValue: form.getInputProps('currency'),
            },
          ],
        },
      ],
    },
  ]


  return(
    <Box>
        <AppGrid gridRoot={example} />
    </Box>
  )
 */
export type IGridElements = IGridRoot

interface IColumnDocumentation extends Omit<IClassSx, 'style'> {
  /**
   *@example
   Example(1)
    colspan = 12
    <Grid.Col span={12}/>

        colspan = 1 "sampai" 12 || "auto" , "content"
   */
  colspan?: ColSpan | undefined

  order?: number | undefined
  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.input.map((row,key)=>(
            <TextInput key={key} label={row.label} icon={row.icon} {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  TextInput?: IInput[]

  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.autoComplete.map((row,key)=>(
            <Select
            key={key}
            label={row.label}
            icon={row.icon}
            data={row.data || ['React', 'Angular', 'Svelte', 'Vue'] }
            {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  AutoComplete?: IAutoComplete[]

  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.passwordInput.map((row,key)=>(
            <PasswordInput key={key} label={row.label} icon={row.icon} {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  PasswordInput?: IPasswordInput[]

  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.numberInput.map((row,key)=>(
            <NumberInput key={key} label={row.label} icon={row.icon} {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  NumberInput?: INumberInput[]

  /**
   *@example
   Example(1)
   [
      {
        column:[
          {
            props:{p:"sm",onClick:()=>handleClick()}
          }
        ]
      }
   ]
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k} {...props}>
        </Grid.Col>
      ))}
    )
   */
  props?: ColProps
}

interface IGridRootDocumentation extends Omit<IClassSx, 'style'> {
  /**
   * @example
   *
   * [
   *    {
   *      gutter:"sm",
   *      margin:"xs",
   *      props:{p:"xl"},
   *      GridCol:
   *       [
   *          {
   *            colspan:12, ----------> Required(),
   *          },
   *          {
   *            colspan:6,
   *          },
   *      ],
   *    },
   * ]
   *
   * return(
        <Grid gutter="sm" margin="xs" p="xl">
            <Grid.Col colSpan={12}></Grid.Col>
            <Grid.Col colSpan={6}></Grid.Col>
        </Grid>
   * )
   *
   *
   */
  GridCol: IColumn[]
  gutter?: MantineNumberSize | undefined
  margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  props?: GridProps
}
