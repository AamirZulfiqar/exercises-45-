/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// Five places in the world i want to visit
let worldvisit: string[]=['India','Russia','China','Dubai','Australia'];
console.log(worldvisit);
//console.log("\n");
// step 2:• Print your array in alphabetical order without modifying the actual list.
console.log([...worldvisit].sort());
// step 3:• Show that your array is still in its original order by printing it.
//console.log("\n");
console.log(worldvisit);
// step 4:• Print your array in reverse alphabetical order without changing the order of the original list.
//console.log("\n");
console.log([...worldvisit].reverse());
// step 5:• Show that your array is still in its original order by printing it again.
//console.log("\n");
console.log(worldvisit);
// step 6:• Reverse the order of your list. Print the array to show that its order has changed.
//console.log("\n");
console.log([...worldvisit].sort().reverse());
// step 7:• Reverse the order of your list again. Print the list to show it’s back to its original order.
//console.log("\n");
console.log([...worldvisit].reverse());
//console.log("\n");
// step 8:• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
worldvisit.sort();
console.log(worldvisit);
// step 9:• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
worldvisit.sort().reverse();
console.log(worldvisit);













