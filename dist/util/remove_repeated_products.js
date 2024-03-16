"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_repeated_products = void 0;
const remove_repeated_products = (list) => {
    let newList = list;
    for (let i = 0; i < newList.length; i++) {
        const x = newList.filter((item) => item.productId === newList[i].productId);
        const isDouble = x.length > 1;
        if (isDouble) {
            newList = list.filter((item) => item.productId !== list[i].productId);
            let modifiedItemQuantity = 0;
            for (const item of x) {
                modifiedItemQuantity += item.quantity;
            }
            const modifiedItem = {
                productId: x[0].productId,
                quantity: modifiedItemQuantity,
            };
            newList.push(modifiedItem);
        }
    }
    return newList;
};
exports.remove_repeated_products = remove_repeated_products;
//# sourceMappingURL=remove_repeated_products.js.map