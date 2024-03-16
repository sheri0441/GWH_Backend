"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_user = void 0;
const prisma_1 = require("../prisma/prisma");
const find_user = async (email) => {
    try {
        let user = await prisma_1.prisma.user.findUnique({
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
exports.find_user = find_user;
//# sourceMappingURL=find_user.js.map