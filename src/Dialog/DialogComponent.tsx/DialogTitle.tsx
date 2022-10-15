import { Group } from '@mantine/core'

export function DialogTitle(label: string, icon: any) {
  return (
    <>
      <Group p="xs" sx={{ fontSize: '20px' }}>
        {label}
        {icon}
      </Group>
    </>
  )
}
