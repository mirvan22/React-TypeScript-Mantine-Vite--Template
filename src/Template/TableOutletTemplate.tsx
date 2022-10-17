import { Col, Grid, Group, Paper, Select, Title } from '@mantine/core'
import { __IconDashBoard } from '../Utils/UtilsIcon'

import { BsFilterLeft } from 'react-icons/bs'
import { AppSearchInput } from '../Component/AppSearchInput'
import { useMediaQuery } from '@mantine/hooks'

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

export const TableOutletTemplate = ({ label, icon, children }: Required<ITableOutletTemplate>) => {
  return (
    <>
      <TitleOutlet label={label || 'Dashboard'} icon={icon || __IconDashBoard} />
      <Paper withBorder className="shadow--sm">
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
    <Paper shadow="md" p="xs" className="main-color" sx={{ borderRadius: '3px', marginBottom: 10 }}>
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
  return (
    <Paper shadow="md" p="sm" className="main-color" sx={{ borderRadius: '3px' }}>
      <Grid justify="flex-start" gutter="xl">
        <Col span={5}>
          <Select
            clearable
            // onDropdownClose   Delete Params
            size="sm"
            maxDropdownHeight={280}
            shadow="sm"
            icon={<BsFilterLeft size={25} />}
            placeholder="Status"
            searchable
            nothingFound="No options"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </Col>
      </Grid>
    </Paper>
  )
}

export const FooterOutlet = () => {
  return <Paper className="main-color" p="md" sx={{ borderRadius: '0px 0px 3px 3px', boxShadow: '0 -1px 10px rgba(0,0,0,0.3)' }}></Paper>
}
