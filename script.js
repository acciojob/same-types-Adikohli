function isSameType(value1, value2) {
  const typeValue1 = getType(value1);
  const typeValue2 = getType(value2);

  if (typeValue1 === "number" && Number.isNaN(value1) &&
      typeValue2 === "number" && Number.isNaN(value2)) {
    return true;
  }

  return typeValue1 === typeValue2;
}

function getType(value) {
  if (Number.isNaN(value)) {
    return "number";
  }
  return typeof value;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

