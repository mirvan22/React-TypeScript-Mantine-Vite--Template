import { Box, Paper, Text } from '@mantine/core'
import { FunctionComponent } from 'react'

const About = () => {
  return (
    <Box>
      <Paper p="sm">
        <Text>
          <h1>About</h1>
        </Text>
        <Text>Use it to create cards, dropdowns, modals and other components that require background with shadow</Text>
      </Paper>
    </Box>
  )
}

export default About as FunctionComponent
