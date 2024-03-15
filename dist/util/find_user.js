import { prisma } from "../prisma/prisma";
export const find_user = async (email) => {
    try {
        let user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    }
    catch (error) {
        throw error;
    }
};
