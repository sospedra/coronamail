export type Mail = {
  author: string
  content: string
  country: string
  raw: string
  createdAt: string
  destinationID: string
  lang: string
  openedAt?: string
  ownerID: string
  reaction?: string
  subject: string
}

export type UserRole = 'writer' | 'sick' | 'assist'

export type User = {
  name: string
  email: string
  country: string
  inbox_size: number
  role: UserRole
  languages: string[]
  verified: boolean
}

export type ProtoUser = Omit<User, 'inbox_size' | 'verified'>
