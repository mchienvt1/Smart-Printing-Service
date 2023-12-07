module.exports = (objectPagination, query, countPrinters) => {
    if(query.page) {
      objectPagination.currentPage = parseInt(query.page);
    }
  
    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;
  
    const totalPage = Math.ceil(countPrinters/objectPagination.limitItems);
    objectPagination.totalPage = totalPage;
  
    return objectPagination;
  }