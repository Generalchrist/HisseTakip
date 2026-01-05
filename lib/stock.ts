import { prisma } from "./prisma";

export async function addFavoriteStock(
  userId: number,
  stock: { symbol: string; shortName: string }
) {
  return prisma.favoriteStock.create({
    data: {
      symbol: stock.symbol,
      shortName: stock.shortName,
      userId,
    },
  });
}


export async function getFavoriteStocks(userId: number) {
  return prisma.favoriteStock.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}


export async function removeFavoriteStock(userId: number, symbol: string) {
  return prisma.favoriteStock.delete({
    where: {
      userId_symbol: {
        userId,
        symbol,
      },
    },
  });
}

