const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const likeTracker = document.querySelector(".likes")
const likeButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")
const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("list")

let startCounting = setInterval(()=>counter.innerHTML++, 1000)
let isCounting = true

function continueCounting(){
    startCounting = setInterval(()=>counter.innerHTML++, 1000)
    isCounting = true
    pauseButton.innerText="pause"
}

function stopCounting(){
    clearInterval(startCounting)
    isCounting = false;
    pauseButton.innerText= "resume"
}

function createLiker(){
    let likeCounter = document.createElement("li")
    likeCounter.id=`${counter.innerHTML}`
    likeTracker.value=1
    likeCounter.innerText = `${counter.innerHTML} has been liked 1 time`
    likeTracker.appendChild(likeCounter)
}

plus.addEventListener("click", ()=>counter.innerHTML++ )
minus.addEventListener("click",()=>counter.innerHTML--)
pause.addEventListener("click",()=>{
    if(isCounting){
        stopCounting()
    } else if(!isCounting){
        continueCounting()
    }
})

likeButton.addEventListener("click", ()=>{
   const currentLi = document.getElementById(`${counter.innerHTML}`)
   if(currentLi){
    currentLi.value++
    currentLi.innerText = `${counter.innerHTML} has been liked ${currentLi.value} times`
   }else{
    createLiker()
   }
})

commentForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let newComment = document.createElement("p")
    newComment.innerText = `${e.target[0].value}`
    commentList.append(newComment)

})





