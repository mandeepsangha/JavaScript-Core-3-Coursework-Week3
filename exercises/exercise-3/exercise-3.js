let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printOut(order) {
  let totalCost = 0;

  let qty = `QTY${" ".repeat(4)}`;
  let item = `ITEM${" ".repeat(16)}`;
  console.log(`${qty}${item}TOTAL`);

  for (let item in order) {
    let { itemName, quantity, unitPrice } = order[item];
    totalCost = totalCost + unitPrice * quantity;
    let blankSpace = " ".repeat(20 - itemName.length);
    console.log(
      `${quantity}${" ".repeat(6)}${itemName}${blankSpace}${(
        unitPrice * quantity
      ).toFixed(2)}`
    );
  }

  console.log(`Total: ${totalCost}`);
}

printOut(order);
