let count = 1
let cartbag = 0
let Carts = JSON.parse(localStorage.getItem("CartItems")) || []
displayCart(Carts)
console.log(Carts)

// localStorage.clear()

function displayCart(Carts){
    // bag.forEach()
    document.querySelector(".cartcontainer").innerText = "";
    Carts.forEach((ele,index)=>{

      let divs = document.createElement("div")
  
     let image = document.createElement("img")
      image.setAttribute("src",ele.Image)
  
      let company = document.createElement("h2")
      company.innerText = ele.Name
  
      let cost = document.createElement("h3")
      cost.innerText = ele.Price
  
      let specs = document.createElement("p")
      specs.innerText = ele.Rating
  
      let Cate = document.createElement("p")
      Cate.innerText = ele.Category
      
      let btn1 = document.createElement("button")
      btn1.innerText = "+"
      btn1.addEventListener("click",()=>{
        count++
        // console.log(count)
        if(count == 0){
          cost.innerText = ele.Price
        }
        else{
          cost.innerText = ele.Price*count
        }
        console.log(index)
       
        cartbag = ele.Price*count
        

        
        // Carts.forEach((ele)=>{

        console.log(cost.textContent)
        // let a = cost.textContent
        // document.querySelector(".Total-Price").append(a)

        // })


        sp1.innerText = count
      })

      let sp1 = document.createElement("span")
      sp1.innerText = count
      
      // sp1.addEventListener((ele,index)=>{
        
      // })


      let btn2 = document.createElement("button")
      btn2.innerText = "-"
      btn2.addEventListener("click",()=>{
        if(count!==1){
          count--
        }
        cost.innerText = ele.Price*count
        cartbag = ele.Price*count
        // console.log(cartbag+"S")
        // console.log(count)
        sp1.innerText = count
      })

      let btn3 = document.createElement("button")
      btn3.innerText = "Remove"
      btn3.addEventListener("click",()=>{
        delfun(ele,index)
      })


      // console.log(Carts.length*ele.price)
      // let totalCost =  Carts.length*ele.price
      // cartbag = ele.price*count
  
    //  console.log("a")
  // console.log(cost.textContent+"S")
    //  console.log(cartbag+"S")
     divs.append(image,company,cost,specs,Cate,btn1,sp1,btn2,btn3)
     document.querySelector(".cartcontainer").append(divs)
  
    
    })
  }
  function delfun(ele,index){
    Carts.splice(index,1)
    console.log(Carts)
    displayCart(Carts)
    localStorage.setItem("CartItems",JSON.stringify(Carts))
  }
   