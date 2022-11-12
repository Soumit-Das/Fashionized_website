let form2 = document.createElement("form")

let head1 = document.createElement("h3")
head1.innerText = "Email here"

let input1 = document.createElement("input")
input1.type = "email"
input1.id = "emlg"

let br1 = document.createElement('br');
let br2 = document.createElement('br');

let head2 = document.createElement("h3")
head2.innerText = "Password here"

let input2 = document.createElement("input")
input2.type = "password"
input2.id = "pdlg"
let input3 = document.createElement("input")
input3.type = "submit"
input3.addEventListener("click",loginfun)
form2.append(head1,input1,br1,br2,head2,input2,input3)
document.querySelector(".loginform").append(form2)

function loginfun(){
    event.preventDefault()
    let emailed = JSON.parse(localStorage.getItem("signUpdate"))
    // console.log(emailed)

    //  getting login details
  let a = document.querySelector("#emlg").value
  let b = document.querySelector("#pdlg").value
  console.log(a)
  console.log(b)
  let count = 0;
  emailed.forEach(function (element,i){
    let e = element
    if(i == 0){
     
        if(element == a){
            count++
        }
        else{
          alert("Wrong Email")
        }
        
    }
    else if(i == 1){

      if(element == b){
        count++
    }
    else{
      alert("Wrong Password")
    }

    }

  })
   
  if(count == 2){
    alert("Login Success")
    window.location.assign("Project.html")
  }
  else{
    alert("Login failed")
  }
    console.log(emailed[0])
 
    


}
