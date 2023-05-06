import { PrismaClient } from '@prisma/client'
import { users } from './data'

const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.user.deleteMany()
    await prisma.user.createMany({ data: users })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
