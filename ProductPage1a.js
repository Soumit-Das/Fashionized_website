
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




let sliderContent = document.querySelector(".imgss")
let image = ["img59.jpg","img60.jpg","img61.jpg","img62.jpg","img63.jpg"]

let i = 0;


function Previousfun(){
    if(i <= 0)
            i = image.length;
            i--;
            return showImg();
}

function Nextfun(){
    if(i >= image.length-1)
            i = -1;
            i++;
            return showImg()
}

function showImg(){
    return sliderContent.setAttribute('src', 'images/'+image[i])
}

function ChangeImg1(){
    let displayImg = document.querySelector(".imgss")
    let other = document.querySelector(".img0")
    displayImg.src = "/accidental-discussion-3173/images/img59.jpg"
}
function ChangeImg2(){
    let displayImg = document.querySelector(".imgss")
    let other = document.querySelector(".img1")
    displayImg.src = "/accidental-discussion-3173/images/img60.jpg"
}
function ChangeImg3(){
    let displayImg = document.querySelector(".imgss")
    let other = document.querySelector(".img2")
    displayImg.src = "/accidental-discussion-3173/images/img61.jpg"
}
function ChangeImg4(){
    let displayImg = document.querySelector(".imgss")
    let other = document.querySelector(".img3")
    displayImg.src = "/accidental-discussion-3173/images/img62.jpg"
}

// Fit button styling

// fit buttons

let one = false
let two = false
let three = false

function fitbt1(){
    one = true
    
        let btnst = document.querySelector("#btn1")
        btnst.style.border = "2px solid rgba(75,86,102,255)"

        let btnst2 = document.querySelector("#btn2")
        btnst2.style.border = "2px solid rgb(189, 185, 185)"
        let btnst3 = document.querySelector("#btn3")
    btnst3.style.border = "2px solid rgb(189, 185, 185)"

    }


function fitbt2(){
    two = true
    
        let btnst2 = document.querySelector("#btn2")
        btnst2.style.border = "2px solid rgba(75,86,102,255)"

        let btnst = document.querySelector("#btn1")
        btnst.style.border = "2px solid rgb(189, 185, 185)"
        let btnst3 = document.querySelector("#btn3")
    btnst3.style.border = "2px solid rgb(189, 185, 185)"

    }


function fitbt3(){
    three = true
    let btnst3 = document.querySelector("#btn3")
    btnst3.style.border = "2px solid rgba(75,86,102,255)"


    let btnst = document.querySelector("#btn1")
        btnst.style.border = "2px solid rgb(189, 185, 185)"
        let btnst2 = document.querySelector("#btn2")
        btnst2.style.border = "2px solid rgb(189, 185, 185)"
}


// size buttons

function SZbt1(){

    let Sizest1 = document.querySelector("#SZ1")
    Sizest1.style.border = "2px solid rgba(75,86,102,255)"


    let Sizest2 = document.querySelector("#SZ2")
    Sizest2.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest3 = document.querySelector("#SZ3")
    Sizest3.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest4 = document.querySelector("#SZ4")
    Sizest4.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest5 = document.querySelector("#SZ5")
    Sizest5.style.border = "2px solid rgb(189, 185, 185)"


}
function SZbt2(){

    let Sizest2 = document.querySelector("#SZ2")
    Sizest2.style.border = "2px solid rgba(75,86,102,255)"


    let Sizest1 = document.querySelector("#SZ1")
    Sizest1.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest3 = document.querySelector("#SZ3")
    Sizest3.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest4 = document.querySelector("#SZ4")
    Sizest4.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest5 = document.querySelector("#SZ5")
    Sizest5.style.border = "2px solid rgb(189, 185, 185)"
}
function SZbt3(){

    let Sizest3 = document.querySelector("#SZ3")
    Sizest3.style.border = "2px solid rgba(75,86,102,255)"


    let Sizest1 = document.querySelector("#SZ1")
    Sizest1.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest2 = document.querySelector("#SZ2")
    Sizest2.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest4 = document.querySelector("#SZ4")
    Sizest4.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest5 = document.querySelector("#SZ5")
    Sizest5.style.border = "2px solid rgb(189, 185, 185)"
}
function SZbt4(){

    let Sizest4 = document.querySelector("#SZ4")
    Sizest4.style.border = "2px solid rgba(75,86,102,255)"


    let Sizest1 = document.querySelector("#SZ1")
    Sizest1.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest2 = document.querySelector("#SZ2")
    Sizest2.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest3 = document.querySelector("#SZ3")
    Sizest3.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest5 = document.querySelector("#SZ5")
    Sizest5.style.border = "2px solid rgb(189, 185, 185)"
}
function SZbt5(){

    let Sizest5 = document.querySelector("#SZ5")
    Sizest5.style.border = "2px solid rgba(75,86,102,255)"


    let Sizest1 = document.querySelector("#SZ1")
    Sizest1.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest2 = document.querySelector("#SZ2")
    Sizest2.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest3 = document.querySelector("#SZ3")
    Sizest3.style.border = "2px solid rgb(189, 185, 185)"
    let Sizest4 = document.querySelector("#SZ4")
    Sizest4.style.border = "2px solid rgb(189, 185, 185)"

}


// Making Cart button

// let arr = [];
// localStorage.setItem("CartItems",JSON.stringify(arr))

// localStorage.clear()

let AddtoCart = JSON.parse(localStorage.getItem("CartItems")) || []

let obj = {}
let A = true

// checking if this is item is present in cart or not

AddtoCart.forEach((element,index)=>{
let nm = document.querySelector("#ProductName").innerHTML
   if(element.Name == nm){
    A = false
    console.log(A)
   }

})



function Cartbtn(){
    
    console.log(AddtoCart)
    // console.log(A)
    
    if(A == true){

        let Pn = document.querySelector("#ProductName").innerHTML
        
        p1.forEach((ele,index)=>{
             
        if(ele.Name == Pn){
        
             obj = {
                Image : ele.Image,
                Name : ele.Name,
                Price : ele.Price,
                Rating : ele.Rating,
                Category : ele.Category
            }
            AddtoCart.push(obj)
            localStorage.setItem("CartItems",JSON.stringify(AddtoCart))
        }
        })
        A = false
    }
    else{
        alert("Item already in the Basket")
    }
    
    
    }






