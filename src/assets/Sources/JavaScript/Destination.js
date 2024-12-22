
var expandYapping;

document.addEventListener('DOMContentLoaded',()=>{

    yap=document.getElementById('vertical3')
    expandYapping=function(element)
    {
        if(element.innerText=='Expand')
        {
            yap.style.height="fit-content";
            element.innerText='Collapse';
        }
        else{
            yap.style.height='400px';
            element.innerText='Expand';
        }
    }
})