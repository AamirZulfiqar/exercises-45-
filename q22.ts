//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruits =['apple', 'orange','banana','grapes'];

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}