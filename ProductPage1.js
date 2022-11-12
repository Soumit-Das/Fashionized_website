

let p1 = [{Image: "https://images.urbndata.com/is/image/Anthropologie/4130916210121_048_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" , Name:"The Marais Chiffon Maxi Dress: Shine Edition", Price:220 , Rating:4.5 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130657990054_096_b14?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698" , Name:"Mare Mare Layered Sweater & Slip Dress", Price:168 ,Rating:4.6 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130916210109_038_b16?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698" , Name:"The Somerset Maxi Dress: Velvet Edition", Price:180 ,Rating:4.2 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130344600168_070_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698" , Name:"Let Me Be Embellished Deep-V Dress", Price:258 , Rating:4.2 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130370060109_041_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698" , Name:"By Anthropologie Twist-Front Sequin Dress", Price:210 ,Rating:4.3 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130344600167_015_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Let Me Be Deep-V Dress", Price:220 ,Rating:4.3 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130464030203_061_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Hutch Sequin Bow Dress", Price:230 ,Rating:4.5 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_018_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"The Marais Printed Chiffon Maxi Dress", Price:180,Rating:4.2 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130097530242_001_b?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698" , Name:"Shoshanna Ruched Asymmetrical Dress", Price:570 , Rating:4.9 ,Category:"Standard Collection"},

{Image: "https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Verb by Pallavi Singhee Smocked Corset Dress", Price:298 , Rating:4.8 ,Category:"Standard Collection"},

{Image: "https://images.urbndata.com/is/image/Anthropologie/4130456940046_027_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Verb by Pallavi Singhee Sequin Shift Dress", Price:220 ,Rating:4.6 ,Category:"Standard Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130916210122_001_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"By Anthropologie Embellished Velvet Dress", Price:248 ,Rating:4.5 ,Category:"Standard Collection"},


{Image: "https://images.urbndata.com/is/image/Anthropologie/4130370060106_266_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Maeve Plaid Sequin Shift Dress", Price:480 ,Rating:4.4 ,Category:"Premium Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130370060116_030_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Maeve Tie-Neck Mini Dress", Price:698 ,Rating:4.8 ,Category:"Premium Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130348690203_059_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"Maeve Side-Slit Halter Dress", Price:580 ,Rating:4.1 ,Category:"Premium Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130089540086_066_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"By Anthropologie Structured Tulle Dress", Price:680 ,Rating:4.3 ,Category:"Premium Collection"},


{Image: "https://images.urbndata.com/is/image/Anthropologie/4130370060103_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"By Anthropologie Mock-Neck Velvet Mini Dress", Price:620 ,Rating:4.5 , Category:"Premium Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130370060100_096_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"By Anthropologie Plissé Halter Dress", Price:550 ,Rating:4.6 ,Category:"Premium Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130370060072_046_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"The Somerset Maxi Dress", Price:600 , Rating:4.3 , Category:"Premium Collection"},
{Image: "https://images.urbndata.com/is/image/Anthropologie/4130264840021_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" , Name:"By Anthropologie Ruffled Tunic Dress", Price:500 ,Rating:4.0 , Category:"Premium Collection"}

] 
displaycard(p1)
document.querySelector(".totalproduct").innerHTML = "Total Products : " + p1.length
 function displaycard(p1){
  document.querySelector(".productsection").innerHTML = "";
p1.forEach((ele,index)=>{

  let div = document.createElement("div")

  let img = document.createElement("img")
  img.setAttribute("src",ele.Image)

  let name = document.createElement("a")
  name.innerText = ele.Name
  if(index == 0){
    name.setAttribute("href","ProductPage1a.html")
  }
  else if(index == 1){
    name.setAttribute("href","ProductPage2a.html")
  }
  name.style.textDecoration = "none"


  let cost = document.createElement("h3")
  cost.innerText = "$ " + ele.Price
  cost.id = "CP"

  let rating = document.createElement("h3")
  rating.innerText = ele.Rating

  let category = document.createElement("h5")
  category.innerText = ele.Category


  // console.log(name,cost)
div.append(img,name,cost,rating,category)
document.querySelector(".productsection").append(div)


})

 }

// filter function

 function Filterhandler(){
  let selected = document.querySelector("#Filter").value

if(selected !== "Filter"){

  let Catfilter = p1.filter((ele)=>{
   return ele.Category == selected
  })
  displaycard(Catfilter)
}
else{
  displaycard(p1)
}
}

// filter ends



// Sort function  

let S = document.querySelector("#Sort").value
function Sorthandler(){
  if(Sort.value == "Price high to Low"){
    p1.sort(function (a,b){
      return b.Price - a.Price
    })
  }
  else if(Sort.value == "Price Low to high"){
    p1.sort(function (a,b){
      return a.Price - b.Price
    })  
  }
  else if(Sort.value == "Rating high to low"){
    p1.sort(function (a,b){
      return b.Rating - a.Rating
    })  
  }
  else if(Sort.value == "Rating low to high"){
    p1.sort(function (a,b){
      return a.Rating - b.Rating
    })  
  }
  else if(Sort.value == "Sort"){
    location.reload()
  }
  displaycard(p1)
}

// Sort ends

// <!-- search function -->
let serachfun = () => {
  document.querySelector(".serachres").innerText = "";
  let filter = document.querySelector("#Searchbar").value.toUpperCase()
  
  for(let i =0;i<p1.length;i++){
    let a = p1[i].Name
    let textValue  = a
        if(textValue.toUpperCase().indexOf(filter) > -1){
          let sdiv = document.createElement("div")
          
          let name = document.createElement("a")
          name.innerText = (p1[i].Name)
          name.id = "Names"
          name.setAttribute("href","ProductPage1a.html")
          

          let imgs = document.createElement("img")
          imgs.setAttribute("src",p1[i].Image)

          let costs = document.createElement("h3")
          costs.innerText = "$ " + p1[i].Price
          costs.id = "Costs"

          let ratings = document.createElement("h3")
          ratings.innerText = p1[i].Rating
          ratings.id = "Ratings"

          let categorys = document.createElement("h5")
          categorys.innerText = p1[i].Category
          categorys.id = "Categorys"

          sdiv.append(imgs,name,costs,ratings,categorys)

          document.querySelector(".serachres").append(sdiv)
          console.log(p1[i])
        }
        if(filter == ""){
          document.querySelector(".serachres").innerText = "";
        }
  }
}
// Search ends

// let navbar = document.querySelector(".navbar");
// let menu = document.querySelector("#menu");

// window.onscroll = function(){
//   if(window.pageYOffset >= menu.offsetTop){
//     navbar.classList.add("sticky")
//   }
//   else{
//     navbar.classList.remove("sticky")
//   }
// }




