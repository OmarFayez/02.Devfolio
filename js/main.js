let counters=Array.from(document.querySelectorAll(".counter"))
function counterAnimate()
{
    for(let counterElemnt of counters)
{
function updateCounter()
{
    let target = +counterElemnt.getAttribute("data-target")    
    let count=+counterElemnt.innerText
    let icrement =+target/1500 
    counterElemnt.innerText=Math.ceil(count +icrement)
    if(target>count)
    {
        setTimeout(updateCounter,30)
    }
    else
    {
        counterElemnt.innerText=target
    }
}
updateCounter()
}
}

let records=document.getElementById("records")
let about=document.getElementById("about")
function getOffset (el) {
  const box = el.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft
  };
}
let recordsOffset=getOffset(records).top
let aboutOffset=getOffset(about).top


window.addEventListener("scroll",function(){
    if(document.body.scrollTop>recordsOffset-200&&document.body.scrollTop<recordsOffset+800)
    {
        counterAnimate()
    }
    if(document.body.scrollTop>aboutOffset-300&&document.body.scrollTop<aboutOffset+800)
    {
       let progressBars= Array.from(document.querySelectorAll(".skills .progress .progress-bar"))
        for(let i of progressBars)
        {
            i.classList.add("animateMe")

        }
    }

})