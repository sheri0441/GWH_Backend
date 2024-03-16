"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_productList_id = void 0;
const get_productList_id = (list) => {
    let idArray = [];
    list.forEach((item) => {
        idArray.push(item.productId);
    });
    return idArray;
};
exports.get_productList_id = get_productList_id;
//# sourceMappingURL=get_productList_id.js.map