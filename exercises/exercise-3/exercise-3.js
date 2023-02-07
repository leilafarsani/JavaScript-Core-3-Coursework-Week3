let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const giveTheReceipt = (orders) => {
  console.log("QTY".padEnd(10) + "Item".padEnd(20) + "Total");
  let orderCost = 0;
  orders.forEach((order) => {
    const { itemName, quantity, unitPrice } = order;
    const total = quantity * unitPrice;
    orderCost += total;
    console.log(
      `${quantity.toString().padEnd(10)}${itemName.padEnd(20)}${total}`
    );
  });
  console.log(`\nTotal: ${orderCost}`);
};

giveTheReceipt(order);
