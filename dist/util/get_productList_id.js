export const get_productList_id = (list) => {
    let idArray = [];
    list.forEach((item) => {
        idArray.push(item.productId);
    });
    return idArray;
};
