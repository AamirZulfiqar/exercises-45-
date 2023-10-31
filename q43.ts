/*Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

const magicianNames:string[] = ['Harry Houdini', 'David Copperfield',
 'David Blaine', 'Criss Angel', 'Bangali Baba',];
 function show_magicians(magicianNames:string[]):void {
    for (const magician of magicianNames) {
        console.log(magician);
        
    }
 } 
 function make_great(magicianNames:string[]) {
    const greatMagicians: string[]= []
    for(let i=0; i<magicianNames.length; i++){
        greatMagicians.push(`The Great ${magicianNames[i]}`);
    }
    return greatMagicians;
 }
 console.log('Original Magicians:');
show_magicians(magicianNames);

const greatMagicians= make_great(magicianNames);

console.log('\nGreat Magicians:');
show_magicians(greatMagicians);
console.log('\nUnchanged Magicians:');
show_magicians(magicianNames);

