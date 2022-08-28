const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];
  function getTotalAmountForProducts(products) {
    let totalPrice = 0;
    for(const product of products) {
        totalPrice +=product.price;
    };
    return totalPrice;

  }
  console.log(getTotalAmountForProducts(products));