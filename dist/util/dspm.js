"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.do_Sorting_Pagination_Modification = void 0;
const reduceListDataToCard_1 = require("./reduceListDataToCard");
const getListSorted = (productList, sortBy) => {
    if (sortBy === "a-zAsc") {
        return productList.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sortBy === "a-zDsc") {
        return productList.sort((a, b) => b.title.localeCompare(a.title));
    }
    else if (sortBy === "recentDsc") {
        return productList.sort((a, b) => b.creationAt.getTime() - a.creationAt.getTime());
    }
    else {
        return productList.sort((a, b) => a.creationAt.getTime() - b.creationAt.getTime());
    }
};
const makeListChunks = (list, size) => {
    var chunkArray = [];
    for (let i = 0; i < list.length; i += size) {
        const chunk = list.slice(i, i + size);
        chunkArray.push(chunk);
    }
    return chunkArray;
};
const do_Sorting_Pagination_Modification = (productList, sortBy, currentPage) => {
    if (productList.length === 0) {
        return {
            list: [],
            totalPages: 1,
            currentPage: 1,
        };
    }
    const sortedList = getListSorted(productList, sortBy);
    const chunkListArray = makeListChunks(sortedList, 12);
    const totalPageNumber = chunkListArray.length;
    let pageToShow = currentPage - 1;
    if (totalPageNumber < pageToShow) {
        pageToShow = totalPageNumber - 1;
    }
    const currentPageList = chunkListArray[pageToShow];
    const modifiedProductList = (0, reduceListDataToCard_1.reduceListDataToCard)(currentPageList);
    return {
        list: modifiedProductList,
        totalPages: totalPageNumber,
        currentPage: pageToShow + 1,
    };
};
exports.do_Sorting_Pagination_Modification = do_Sorting_Pagination_Modification;
//# sourceMappingURL=dspm.js.map