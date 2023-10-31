let original_list=["star","moon","earth"];
// by using pop method we removing frnd who can't make dinner with us 
console.log(original_list.pop());
//by using push method we add new frnd
original_list.push('jupiter');
for(let x=0;x<original_list.length;x++){
   console.log(`join me for dinner`, original_list[x]);
}
