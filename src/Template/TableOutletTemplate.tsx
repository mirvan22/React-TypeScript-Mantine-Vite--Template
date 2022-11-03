import { Col, Grid, Group, Paper, Title } from '@mantine/core'

import { BsFilterLeft } from 'react-icons/bs'
import { AppSearchInput } from '../Component/AppSearchInput'
import { useMediaQuery } from '@mantine/hooks'
import { GridTemplate, IGridElements } from './GridTemplate'
import { Icon } from '../Utils/Icon'

interface ITableOutletTemplate {
  label: string
  icon: React.ReactNode
  children: JSX.Element | JSX.Element[]
}
interface IAppTitleOutlet {
  label: string
  icon: any
  search?: boolean
}

interface IElements {
  Grid: () => IGridElements[]
}

export const TableOutletTemplate = ({ label, icon, children }: Required<ITableOutletTemplate>) => {
  return (
    <>
      <TitleOutlet label={label || 'Dashboard'} icon={icon || Icon.Hero.Dashboard} />
      <Paper className="shadow--sm">
        <FilterOutlet />
        {children}
        <FooterOutlet />
      </Paper>
    </>
  )
}

export const TitleOutlet = ({ label, icon, search = true }: IAppTitleOutlet) => {
  const mobile = useMediaQuery('(max-width:768px)')

  return (
    <Paper shadow="md" p="xs" className="main-color" sx={{ borderRadius: '5px', marginBottom: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
      <Grid justify="flex-start" gutter="xl" align="center">
        <Col span={mobile ? 12 : 5}>
          <Group align="center" sx={{ marginTop: 0 }}>
            {icon}
            <Title mt={5} pl={5} order={3} color="white">
              {label} {mobile ? 'Mobile' : 'Desktop'}
            </Title>
          </Group>
        </Col>

        <Col span={mobile ? 12 : 5} offset={mobile ? 0 : 2}>
          {search && <AppSearchInput />}
        </Col>
      </Grid>
    </Paper>
  )
}

export const FilterOutlet = () => {
  const Elements: IElements = {
    Grid() {
      return [
        {
          gutter: 'xl',
          props: { justify: 'flex-start', children: '' },
          GridCol: [
            {
              colspan: 5,
              AutoComplete: [
                {
                  props: {
                    clearable: true,
                    size: 'sm',
                    maxDropdownHeight: 280,
                    shadow: 'sm',
                    searchable: true,
                    nothingFound: 'No Options',
                  },
                  icon: <BsFilterLeft size={25} />,
                  placeholder: 'Status',
                  data: ['React', 'Angular', 'Svelte', 'Vue'],
                },
              ],
            },
          ],
        },
      ]
    },
  }
  return (
    <Paper shadow="md" p="sm" className="main-color" sx={{ borderRadius: '5px 5px 0px 0px' }}>
      <GridTemplate GridRoot={Elements.Grid()} />
    </Paper>
  )
}

export const FooterOutlet = () => {
  return <Paper className="main-color" p="md" sx={{ borderRadius: '0px 0px 5px 5px', boxShadow: '0 -1px 10px rgba(0,0,0,0.3)' }}></Paper>
}
