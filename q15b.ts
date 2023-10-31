//in this program we replace the name 
let original_Glist=["star","moon","jupiter"];
console.log(original_Glist.shift());
// we add Mars instead of Star for some reason
console.log(original_Glist.unshift("Mars"));
for(let z=0;z<original_Glist.length;z++){
    console.log('join me for dinner',original_Glist[z]);
    
}

