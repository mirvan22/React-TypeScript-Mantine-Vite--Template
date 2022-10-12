import { createStyles } from '@mantine/core'

export class GlobalColor {
  success = '#4d7c0f'
  hoverSucces = '#365314'
  primary = '#0369a1'
  hoverPrimary = '#0c4a6e'
  danger = '#b91c1c'
  hoverDanger = '#7f1d1d'
  header = 'rgb(26, 27, 30)'
}

export const GlobalShadow = '0px 2px 5px rgba(0,0,0,0.5)'

export const useGlobalStyle = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  navLink: {
    '.mantine-NavLink-label': {
      color: 'rgba(0,0,0,0.7)',
    },
    '.mantine-NavLink-icon': {
      color: 'rgba(0,0,0,0.7)',
    },
    ':hover': {
      '.mantine-NavLink-label': {
        color: 'rgba(3,105,161,0.8)',
      },
      '.mantine-NavLink-icon': {
        color: 'rgba(3,105,161,0.8)',
      },
      backgroundColor: 'rgba(30,144,255,0.1)',
    },
  },

  active: {
    backgroundColor: 'rgba(30,144,255,0.2)',
    '.mantine-NavLink-label': {
      color: '#0369a1',
    },
    '.mantine-NavLink-icon': {
      color: '#0369a1',
    },
  },
}))
