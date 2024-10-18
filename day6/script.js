 //let ar=[1,2,2,3,34,33,45]
// // let newar = ar.map((x)=> x*2);
// // console.log(newar);
// let newar = ar.filter((x)=> x % 2==0);
// //console.log(newar);
// let newa = newar.map((x)=> x*2);
// //console.log(newar);
// let newar = ar.reduce((x , y) => x + y , 0);
// // console.log(newar);
// const students=[{
//     'name':'alice',
//     score:60
// },
// {
//     'name':'bob',
//     score:64
// },
// {
//     'name':'rajesh',
//     score:69
// },
// {
//     'name':'BKL',
//     score:70
// }]
// let newar = students.filter((students)=>(students.score>60))//.map((students)=>(students.score)*4).reduce((x,y)=>(x+y))
// console.log(newar) 
// sayhello=()=>{
//     console.log("Hello Function");

// };
// console.log("Start");
// setTimeout(sayhello,4000);
// // console.log("End");
// console.log("start");
// setTimeout(() => {
// console.log("first task complted");
// setTimeout(() => {
// console.log("second task completed");
// setTimeout(() => {
// console.log("third task completed"); }, 3000); }, 2000); }, 1000);
// // console.log("End");
// const myPromise = new Promise((resolve, reject)=>{
// let success = true;
// if (success) {
// resolve("Data Send Success");
// } else {
// reject("Data Failed to send");
// }});
// myPromise
// .then((message)=> console.log(message))
// .catch((error)=> console.log("error is fetching data" + error));
function task(message, delay){

    return new Promise((resolve)=>(
    
     setTimeout(() => {
    
    console.log(message);
    
     resolve();
    
      }, delay);
     })
    
    task("First Task completd", 1000)
    then(() => task("Second task is complted", 2000))
    
    .then(() => task( "third task is completd", 3000))