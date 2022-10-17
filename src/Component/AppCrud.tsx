import { Button, Grid, MantineNumberSize, MantineSize, Paper, Sx } from '@mantine/core'
import React from 'react'
import { useAppDispatch } from '../Store/hook'
import { modalIsOpen, openStack } from '../Store/Reducer/CustomizationReducer'
import { AppDispatch } from '../Store/store'

export interface ICrudAction {
  variant?: 'gradient' | 'filled' | 'outline' | 'default' | 'subtle' | 'light' | 'white' | undefined
  typeColor?: 'success' | 'danger' | 'primary'
  size?: MantineSize | undefined
  icon?: React.ReactNode
  upperCase?: boolean
  label?: string
  openModal?: any
  disabled?: boolean
}

interface IAppCrud {
  paperBorder?: boolean
  sxPaper?: Sx | (Sx | undefined) | undefined
  gridGutter?: MantineNumberSize | undefined
  Action: ICrudAction[] | undefined
}

export const AppCrud = ({ paperBorder = true, gridGutter = 'sm', sxPaper, Action: COL }: IAppCrud) => {
  function setButtonColor(__option: any) {
    if (__option === 'success') {
      return 'button--success'
    }

    if (__option === 'danger') {
      return 'button--danger'
    } else return 'button--primary'
  }

  const dispatch: AppDispatch = useAppDispatch()

  return (
    <Paper withBorder={paperBorder} p="xs" sx={sxPaper || { borderRadius: '0px' }}>
      <Grid gutter={gridGutter || 'sm'}>
        {COL?.map((row: ICrudAction, key: number) => (
          <Grid.Col key={key} span="content">
            <Button
              disabled={!row.disabled || false}
              variant={row.variant || 'filled'}
              className={!row.disabled ? ' button--disabled ' : setButtonColor(row.typeColor)}
              size={row.size || 'xs'}
              leftIcon={row.icon}
              uppercase={row.upperCase || true}
              onClick={() => {
                dispatch(modalIsOpen(true))
                dispatch(openStack(row.openModal))
              }}
            >
              {row.label}
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  )
}
