import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core'
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons'

export const AppSearchInput = (props: TextInputProps) => {
  const theme = useMantineTheme()

  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="sm"
      rightSection={
        <ActionIcon size={25} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? <IconArrowRight size={18} stroke={1.5} /> : <IconArrowLeft size={18} stroke={1.5} />}
        </ActionIcon>
      }
      placeholder="Search questions"
      rightSectionWidth={42}
      {...props}
    />
  )
}
