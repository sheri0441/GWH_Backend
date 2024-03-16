"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate_orderProducts_total_price = void 0;
const calculate_orderProducts_total_price = (list) => {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].price * list[i].quantity;
    }
    return sum;
};
exports.calculate_orderProducts_total_price = calculate_orderProducts_total_price;
//# sourceMappingURL=calculate_orderProducts_total_price.js.map