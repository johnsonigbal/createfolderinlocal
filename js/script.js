
const git =document.querySelectorAll("#git>ul li")
// console.log(git);

// git.forEach((data)=>{data.addEventListener("click",()=>{
//     console.log(data.children[0],"log");
    
//     data.children[0]!==undefined?data.children[0].style.display==="none"?data.children[0].style.display="block":data.children[0].style.display="none":console.log("no child");
    
//     })
// }) //mapclosed



window.onload=()=>{

    git.forEach((data)=>{  
        data.children[0]===undefined? data.style.cursor="default":chidlendisplay(data)
        
})
}

function chidlendisplay(data)
{
    data.addEventListener("click",()=>{
        console.log(data.children[0],"log");
        data.children[0]!==undefined?data.children[0].style.display==="none"?data.children[0].style.display="block":data.children[0].style.display="none":console.log("no child");
    })
}
