export enum Branch {
  Negombo,
  Colombo,
  Gampaha,
  Galle
}

export type User = {
  id: number
  firstName: string
  lastName: string
  mobile: string
  branch: Branch
  pw: string
}
