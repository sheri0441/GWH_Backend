export const reduceListDataToCard = (list) => {
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
