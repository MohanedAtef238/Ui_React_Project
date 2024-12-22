var SearchFilter;
var CheckFilter;
var ShowModal;
addEventListener("DOMContentLoaded",()=>{

    cards=document.getElementsByClassName("wholeCard");
    cardTitles=document.getElementsByClassName("card-title")
    cardAlerts=document.getElementsByTagName('p');
    
    searchBar=document.getElementsByTagName("input")[0];
    checkBoxes=document.getElementsByClassName('btn-check');
    checkBoxes[0].checked=true;

    SearchFilter=function(name){
        console.log(name);
        for(var i=0;i<cardTitles.length;i++)
        {
            if(!cardTitles[i].innerText.toLowerCase().trim().includes(name.toLowerCase().trim()) && name!='All')
            {
                cards[i].style.display="none";
            }

            if(cardTitles[i].innerText.toLowerCase().trim().includes(name.toLowerCase().trim()) || name=='All')
            {
                cards[i].style.display="block";
            }
 
        }
    }

    CheckFilter=function(name,check)
    {
        console.log(name);
        if(name=='All' && !check){checkBoxes[0].checked=true;} 
        if(name=='Hot' && !check){checkBoxes[1].checked=true;} 
        if(name=='New' && !check){checkBoxes[2].checked=true;} 

        if(name=='All' && check){checkBoxes[1].checked=false;checkBoxes[2].checked=false;}
        if(name=='Hot' && check){checkBoxes[0].checked=false;checkBoxes[2].checked=false;}
        if(name=='New' && check){checkBoxes[0].checked=false;checkBoxes[1].checked=false;}

        if(name=='All')
        {
            for(var i=0;i<cardAlerts.length;i++)
            {
                cards[i].style.display="block";
            }
        }

        else for(var j=1;j<3;j++)
        {
            for(var i=0;i<cardAlerts.length;i++)
            {
                if(checkBoxes[j].value+'!'==(cardAlerts[i].innerText)){cards[i].style.display=(checkBoxes[j].checked)?"block":"none";}
            }
        }


    }

    ShowModal=function(name)
    {
        console.log('here');
        console.log(name);
        $('#l').modal('show');
    }
    

})



