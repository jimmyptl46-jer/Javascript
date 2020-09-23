// dicount = (listPrice - sellingPrice)/listPrice * 100


var sellingPrice = 199;
var listPrice = 799;

var discountPercent  = (listPrice - sellingPrice) / listPrice * 100;

console.log("Discount Percentage is:",discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

var result = listPrice > sellingPrice;
console.log(result); 