"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce_data_to_orderProducts = void 0;
const reduce_data_to_orderProducts = (dataList, receivedList) => {
    let result = [];
    for (const prod of dataList) {
        for (let j = 0; j < receivedList.length; j++) {
            if (prod.id === receivedList[j].productId) {
                result.push({
                    title: prod.title,
                    image: prod.image,
                    quantity: receivedList[j].quantity,
                    price: prod.price,
                    category: prod.category,
                });
            }
        }
    }
    return result;
};
exports.reduce_data_to_orderProducts = reduce_data_to_orderProducts;
//# sourceMappingURL=reduce_data_to_orderProducts.js.map