"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceListDataToCard = void 0;
const reduceListDataToCard = (list) => {
    return list.map((pro) => {
        const product = {
            title: pro.title,
            price: pro.price,
            image: pro.image,
            id: pro.id,
        };
        return product;
    });
};
exports.reduceListDataToCard = reduceListDataToCard;
//# sourceMappingURL=reduceListDataToCard.js.map