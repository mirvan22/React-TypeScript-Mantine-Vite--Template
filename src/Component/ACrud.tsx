import { Button, Grid, MantineNumberSize, MantineSize, Paper, Sx } from '@mantine/core'
import React from 'react'
import { useAppDispatch } from '../Store/hook'
import { openStack } from '../Store/Reducer/CustomizationReducer'
import { AppDispatch } from '../Store/store'

export interface IButton {
  variant?: 'gradient' | 'filled' | 'outline' | 'default' | 'subtle' | 'light' | 'white' | undefined
  className?: 'success' | 'danger' | 'primary'
  size?: MantineSize | undefined
  icon?: React.ReactNode
  upperCase?: boolean
  label?: string
  openModal?: any
}

interface IACrud {
  paperBorder?: boolean
  sxPaper?: Sx | (Sx | undefined) | undefined
  gridGutter?: MantineNumberSize | undefined
  Action: IButton[]
}

export const ACrud = ({ paperBorder = true, gridGutter = 'sm', sxPaper, Action: COL }: IACrud) => {
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
    <Paper withBorder={paperBorder} p="xs" sx={sxPaper}>
      <Grid gutter={gridGutter || 'sm'}>
        {COL.map((row, key) => (
          <Grid.Col key={key} span="content">
            <Button
              variant={row.variant || 'filled'}
              className={setButtonColor(row.className)}
              size={row.size || 'xs'}
              leftIcon={row.icon}
              uppercase={row.upperCase || true}
              onClick={() => dispatch(openStack(row.openModal))}
            >
              {row.label}
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  )
}
