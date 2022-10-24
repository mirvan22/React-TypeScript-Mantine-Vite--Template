import { Button, ButtonProps, MantineSize } from '@mantine/core'
import React from 'react'
import { IClassSx } from '../Interface/IClassSx'
import { useAppDispatch } from '../Store/hook'
import { modalIsOpen, openStack } from '../Store/Reducer/CustomizationReducer'
import { AppDispatch } from '../Store/store'

interface IAppButton extends Omit<IClassSx, 'className' | 'style'> {
  disabled?: boolean | undefined
  variant?: 'gradient' | 'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | undefined
  color?: 'success' | 'primary' | 'danger' | undefined
  size?: MantineSize | undefined
  icon?: React.ReactNode
  upperCase?: boolean | undefined
  label?: React.ReactNode
  CrudActionOpenModal?: JSX.Element | JSX.Element[] | undefined
  props?: ButtonProps
  onClick?: () => void | undefined
}

export const AppButton = ({
  sx,
  disabled,
  variant,
  color,
  size,
  icon,
  upperCase,
  label,
  CrudActionOpenModal,
  onClick,
  props,
}: IAppButton) => {
  const dispatch: AppDispatch = useAppDispatch()
  function handleCrud() {
    dispatch(modalIsOpen(true))
    dispatch(openStack(CrudActionOpenModal))
  }
  function setButtonColor(__option: any) {
    if (__option === 'success') {
      return 'button--success'
    }

    if (__option === 'danger') {
      return 'button--danger'
    } else return 'button--primary'
  }
  return (
    <Button
      sx={sx}
      disabled={!disabled || false}
      variant={variant || 'filled'}
      className={!disabled ? ' button--disabled ' : color ? setButtonColor(color) : setButtonColor('success')}
      size={size || 'xs'}
      leftIcon={icon}
      uppercase={upperCase || true}
      onClick={() => (CrudActionOpenModal ? handleCrud() : onClick?.())}
      {...props}
    >
      {label}
    </Button>
  )
}
