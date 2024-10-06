let guess= document.querySelector(".guess")
const message= document.querySelector(".message")
let secretNumber= document.querySelector(".number")
const score= document.querySelector(".score")
const checkBtn= document.querySelector(".check")
const highScore= document.querySelector(".highscore")
const againBtn=document.querySelector(".again")


const success= document.querySelector(".success")
const correct= document.querySelector(".correct")

secretNumber= Math.round(Math.random() *20)
console.log(secretNumber)

score.innerText = 20

////to create the change :

const removeHidden = function(){
    success.classList.remove("hidden")
    correct.classList.remove("hidden")
    message.innerText=correct
    secretNumber.innerText=entry

}

// const addHidden=function(){
//     success.classList.add("hidden")
//     correct.classList.add("hidden")
// }
 
// if (guess === secretNumber){
//     removeHidden() 
// }else{
//     addHidden()
// }

//// every time the check Btn is clicked the score will be decreased

checkBtn.addEventListener("click",()=>{
    console.log('e')
    score.innerText--
    if (guess.innerText === secretNumber.innerHTML){
        removeHidden()
}else if(
    guess.innerText <  secretNumber.innerHTML
)
    {message.innerText="too high!" 
    } else{
    message.innerText= "too low!" 
}
})




