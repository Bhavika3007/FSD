async function sample(){
    return new Promise((resolve,reject)=>{
        resolve(1000)
    })
}    
let a=await sample()
console.log(a)
// async function s(){
//     console.log("A")     
//     await sample()
//     console.log("B")
// }
// console.log("Iam outside")