import { Transaction } from "@prisma/client"
import prisma from "../prisma/prisma"

export const POSSIBLE_SECTORS = ["market", "house", "stocks", "travel", "hobbies", "emergency"]
export const POSSIBLE_CATEGORIES = ["debit", "credit"]

export function validateSector(sector: string): Boolean {
  if (POSSIBLE_SECTORS.includes(sector))
    return true
  return false
}

export function validateCategory(category: string): Boolean {
  if (POSSIBLE_CATEGORIES.includes(category))
    return true
  return false
}

export async function createTransaction(username: string, value: number, category: string, sector: string): Promise<Transaction> {
  const user = await prisma.user.findUnique(
    {
      where: {
        email: username
      },
      select: {
        id: true,
        email: false,
        password: false,
        name: false
      }
    }
  )

  if (!user)
    return null

  const wallet = await prisma.wallet.findUnique(
    {
      where: {
        userId: user.id
      }
    }
  )

  if (!wallet)
    return null

  const transaction =  await prisma.transaction.create(
    {
      data: {
        category: category,
        sector: sector,
        value: value,
        wallet: {
          connect: {
            id: wallet.id
          }
        }
      }
    }
  )

  console.log(transaction)

  return transaction
}
