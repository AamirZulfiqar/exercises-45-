//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let students:Array<any> = []
let student0={
    Name:'Hadi', Age:24, Rollnumber:'BV411566',};
    students.push(student0);
let student1={
    Name:'Jutt', Age:25, Rollnumber:'BV411577',};
    students.push(student1);
let student3={
    Name:'Aamir', Age:26, Rollnumber:'BV411588',};
    students.push(student3);

        
    
     for(let i of students) {
         console.log(`Name:${i.Name} Age:${i.Age} Rollnumber:${i.Rollnumber} ------\n`)}
