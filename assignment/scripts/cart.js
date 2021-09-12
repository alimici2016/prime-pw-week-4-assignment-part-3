console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
function addItem(item) {
  basket.push (item)
return true;
}
addItem('apple');
console.log('Should add item to bastket', basket);

function listItems(){
for (let i=0; i < basket.length; i++){
console.log(basket[i]);
}
}
addItem('lemons');
console.log('Should add lemon to basket', basket);
console.log('Should loop items:'); listItems();

function empty() {
  basket.splice(0, basket.length)
}
console.log('Should empty Array:' )
empty();
console.log(basket);
