import { User } from '@prisma/client'

export const users: User[] = [
  {
    id: '1',
    name: 'Alice',
    email: 'alice@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Charlie',
    email: 'charlie@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
