
var input = 0;

function setdefault(){
    document.getElementById("h3cal").style.color = "white";
    document.getElementById("inputfield").style.border = "#F7EFE5";
    document.getElementById("operation").style.color = "#259dde";
}

 

document.getElementById("inputfield").addEventListener("keyup",(e)=>{
    input = e.target.value;
    let a = input.split(" ");
    let operation = a[0];
    function addcal(element){
        let div = document.createElement("div");
        let tn = document.createTextNode(parseInt(element));
        div.appendChild(tn);
        document.getElementById("cal").appendChild(div);
    }

    switch(operation.toLowerCase( )){
        case "add":
            let temp = 0;
            setdefault()
            document.getElementById("cal").innerHTML=null;
            document.getElementById("signsymbol").innerHTML="+";
            a.forEach(element =>{
                if(parseInt(element)){
                    addcal(element);
                    temp += parseInt(element);
                    
                }
            });
            document.getElementById("display").innerHTML = temp;
            break;

        case "sub":
            let temp1 = parseInt(a[1]);
            setdefault()
            document.getElementById("cal").innerHTML=null;
            addcal(temp1);
            document.getElementById("signsymbol").innerHTML="-";
            a.slice(2).forEach(element =>{
                if(parseInt(element)){
                    addcal(element);
                    temp1 -= parseInt(element);
                }
            });
            document.getElementById("display").innerHTML = temp1;
            break;

        case "mul":
            document.getElementById("signsymbol").innerHTML="×";
            setdefault();
            document.getElementById("cal").innerHTML=null;
            let temp2 = 1;
            a.forEach(element =>{
                if(parseInt(element)){
                    addcal(element); 
                        temp2 *= parseInt(element);
                    }
                });
            document.getElementById("display").innerHTML = temp2;
            break;

        case "div":
            let temp3 = a[1];
            document.getElementById("signsymbol").innerHTML="÷";
            setdefault();
            document.getElementById("cal").innerHTML=null;
            addcal(temp3);
            a.slice(2).forEach(element =>{
                if(parseInt(element)){
                    addcal(element);
                        temp3 /= parseInt(element);
                        temp3;
                    }
                });
            document.getElementById("display").innerHTML = temp3;
            break;
        
        default:
            if(input==""){
                setdefault();
            }
            else{
                document.getElementById("h3cal").style.color = "red";
                document.getElementById("inputfield").style.border = "1px solid red";
                document.getElementById("operation").style.color = "red";
            }
            
            break;
    }

})

document.getElementById("use").addEventListener("click",()=>{
    alert(`example: Add 100 and 100
    or add 100 100 
    or add 100 100 100`)
})