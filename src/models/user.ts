export enum Branch {
  Negombo,
  Colombo,
  Gampaha,
  Galle
}

export type User = {
  id: number
  userName: string
  mobile: string
  branch: Branch
  pw: string
}
