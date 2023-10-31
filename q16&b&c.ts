let Glist:string[]=['Mars','Moon','Jupiter','Mercury','Venus','Neptune'];

// Add one new guest in beginning
Glist.unshift('Saturn');
console.log(Glist);
// Add one new guest in middle
Glist.splice(3,0,"Uranus");
console.log(Glist);
Glist.push('Hadi');
console.log(Glist);

for(let g=0;g<Glist.length;g++){
      console.log('join me for dinner,',Glist[g]);
}
    
