import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

export class ClassValidate {
  getData = null as any
  UseForm(data: any) {
    const a = useForm({
      validateInputOnChange: true,
      initialValues: {
        ...data,
      },
      validate: zodResolver(z.object({})),
    })
    this.getData = a

    return a
  }
  Check() {
    return this.getData
  }
}
