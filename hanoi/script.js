blocks = document.querySelectorAll(".block")
container = document.querySelector("#drop_zone")

// function onDragStart(event){
//     event 
//         .dataTransfer
//         .setData('text/plain', event.target.id)

//     event
//         .currentTarget
//         .style
//         .background = "blue"
// }


blocks.forEach(block => {
    block.addEventListener("dragstart",()=>{
        block.classList.add("dragging_now")
        block.style.background = "blue"
    })
    block.addEventListener("dragend",()=>{
        block.classList.remove("draggin_now")
        block.style.background = "antiquewhite"
    })
})


container.addEventListener("dragover",(event)=>{
    event.preventDefault()
    draggable = document.querySelector(".dragging_now")
    container.appendChild(draggable)
})