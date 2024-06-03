// let jsonObj= JSON.parse('{"fact":"The Amur leopard is one of the most endangered animals in the world.","length":68}');
// console.log(jsonObj.length)
//200 =ok
// 400=bad request
// 404 = not found
// 500 - internal server error

// fetch(url)
// .then((response)=>{
//   //  console.log(response)
//     //response.json()

//     return response.json()})
//      .then((data)=>{console.log(data)

//         return fetch(url)
//      })
//      .then((response)=>{
//         return response.json()})
//         .then((data)=>{console.log(data)})
    
// .catch((error)=>{
//     console.log("ERROR-",error)
// })

// async function getFacts(){
//   try{ 
//      let res=await fetch(url)
//     //console.log(res)
//     let data= await res.json();
//     console.log(data.fact)
//     let res2=await fetch(url)
//     //console.log(res)
//    let data2= await res2.json();
//     console.log(data2.fact)
//     //getFacts();
// }catch(error){
//     console.log(error)
// };
// }
// console.log("bYE")
let btn=document.querySelector("button")
btn.addEventListener("click",async()=>{
  let facto=await getFacts();
  console.log(facto)
  let p=document.querySelector("#result")
  p.innerText=facto;
})
let url="https://catfact.ninja/fact";

async function getFacts(){
    try{ 
       let res=await axios.get(url)
      //console.log(res)
    //  let data= await res.json();
   //console.log(res.data.fact)
    return res.data.fact;
// let para=document.querySelector("#fact")
// console.log(para.innertext)
// para.innertext=res.data.fact;
    //   let res2=await fetch(url)
    //   //console.log(res)
    //  let data2= await res2.json();
    //   console.log(data2.fact)
    //   //getFacts();
  }catch(error){
      console.log(error)
      return "NO fact found"
  };
  }
  //console.log("bYE")