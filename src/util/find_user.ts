import { prisma } from "../prisma";

export const find_user = async (email: string) => {
  try {
    let user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
