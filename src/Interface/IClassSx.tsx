import { Sx } from '@mantine/core'
import React from 'react'

export interface IClassSx {
  className?: string | undefined
  sx?: Sx | (Sx | undefined)[] | undefined
  style?: React.CSSProperties | undefined
}
