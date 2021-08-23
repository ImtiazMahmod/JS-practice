// page requirements
function pageRequirements(book1Quantity,book2Quantity,book3Quantity){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    const book1TotalPages = book1Pages*book1Quantity;

    const book2TotalPages = book2Pages*book2Quantity;

    const book3TotalPages = book3Pages*book3Quantity;

    const totalPages = book1TotalPages + book2TotalPages + book3TotalPages;
    
    return totalPages;
}

const pageRequire = pageRequirements(5,7,10);
console.log(pageRequire);