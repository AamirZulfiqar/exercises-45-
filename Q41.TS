/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
let magicianNames:string[] = ['Harry Houdini', 'David Copperfield',
 'David Blaine', 'Criss Angel', 'Bangali Baba',];

 function show_magicians(magicianNames:string[]) {

    for (const magician of magicianNames) {
        console.log(magician);
        
    }
 }
 show_magicians(magicianNames);