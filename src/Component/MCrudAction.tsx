import { Button, Grid, MantineNumberSize, MantineSize, Paper, Sx } from '@mantine/core'
import React from 'react'

export interface IButton {
  variant?: 'gradient' | 'filled' | 'outline' | 'default' | 'subtle' | 'light' | 'white' | undefined
  className?: 'success' | 'danger' | 'primary'
  size?: MantineSize | undefined
  icon?: React.ReactNode
  upperCase?: boolean
  label?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

interface IMCrudAction {
  paperBorder?: boolean
  sxPaper?: Sx | (Sx | undefined) | undefined
  gridGutter?: MantineNumberSize | undefined
  COL: IButton[]
}

export const MCrudAction = ({ paperBorder = true, gridGutter = 'sm', sxPaper, COL }: IMCrudAction) => {
  function setButtonColor(__option: any) {
    if (__option === 'success') {
      return 'button--success'
    }

    if (__option === 'danger') {
      return 'button--danger'
    } else return 'button--primary'
  }

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
              onClick={row.onClick}
            >
              {row.label}
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  )
}
