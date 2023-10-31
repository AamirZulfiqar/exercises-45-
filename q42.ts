/*Great Magicians: Start with a copy of your program from Exercise 40. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
let magicianNames:string[] = ['Harry Houdini', 'David Copperfield',
 'David Blaine', 'Criss Angel', 'Bangali Baba',];
 function show_magicians(magicianNames:string[]):void {
    for (const magician of magicianNames) {
        console.log(magician);
        
    }
 } 
 function make_great(magicianNames:string[]) {
    for(let i=0; i<magicianNames.length; i++){
        magicianNames[i]=`The Great ${magicianNames[i]}`
    }
 }
console.log('Original Magicians:');
show_magicians(magicianNames);

make_great(magicianNames);
console.log('\nGreat Magicians:');
show_magicians(magicianNames);

