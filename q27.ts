/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

console.log('First version');

let alien_color:string = 'green';
if (alien_color === 'green') {
    console.log('The player earned 5 points ');
    
}else if (alien_color === 'yellow'){
    console.log('The player earned 10 points');
    
}else if (alien_color === 'Red'){
    console.log('The player earned 15 points');

}else{
    console.log('unknow alien_color.!');
    
}
console.log('Second version');

alien_color = 'Yellow'
if (alien_color === 'green') {
    console.log('The player earned 5 points '); 

}else if(alien_color === 'Yellow') {
    console.log('The player earned 10 points');

}else if (alien_color === 'Red'){
    console.log('The player earned 15 points');

}else{
    console.log('unknow alien_color.!');
}    
console.log('Third version');

alien_color = 'Red'
if (alien_color === 'green') {
    console.log('The player earned 5 points '); 

}else if(alien_color === 'Yellow') {
    console.log('The player earned 10 points');

}else if (alien_color === 'Red'){
    console.log('The player earned 15 points');

}else{
    console.log('unknow alien_color.!');
}    