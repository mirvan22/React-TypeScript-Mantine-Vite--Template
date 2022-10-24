import * as Yup from 'yup'

const Validator = {
  labelName: 'label',
  Yup: null as any,
  object(rules: any) {
    return Yup.object().shape(rules)
  },
  string(label: string) {
    this.labelName = label
    this.Yup = Yup.string().typeError(`${this.labelName} harus berupa karakter`)
    return this
  },
  number(label: string) {
    this.labelName = label
    Yup.date()
    this.Yup = Yup.number().typeError(`${this.labelName} harus berupa angka`)
    return this
  },
  boolean(label: string) {
    this.labelName = label
    this.Yup = Yup.boolean().typeError(`${this.labelName} harus berupa boolean`)
    return this
  },
  array(label: string) {
    this.labelName = label
    this.Yup = Yup.array().typeError(`${this.labelName} harus berupa array`)
    return this
  },
  date(label: string) {
    this.labelName = label
    this.Yup = Yup.date().typeError(`Format ${this.labelName} harus 'yyyy-mm-dd'`)
    return this.nullable()
  },
  required() {
    this.Yup = this.Yup.required(`${this.labelName} wajib diisi`)
    return this
  },
  nullable() {
    this.Yup = this.Yup.nullable()
    return this
  },
  email() {
    this.Yup = this.Yup.email(`${this.labelName} harus berupa email yang valid`)
    return this
  },
  max(limit: number) {
    this.Yup = this.Yup.max(limit, `${this.labelName} maksimal ${limit}`)
    return this
  },
  min(limit: number) {
    this.Yup = this.Yup.min(limit, `${this.labelName} minimal ${limit}`)
    return this
  },
  same(field: any, label: string) {
    this.Yup = this.Yup.oneOf([Yup.ref(field), null], `${this.labelName} tidak sama dengan ${label || field}`)
    return this
  },
  yup() {
    return this.Yup
  },
}

export default Validator
