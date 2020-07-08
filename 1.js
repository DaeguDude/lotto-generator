const button = document.getElementById("main-button")

button.addEventListener("click",()=>{


    
    const session = {};
    function selfieCheck(numb){
        if(session[`${numb}`]){
            return selfieCheck( Math.ceil((Math.random() * 100) % 45));
        }else{
            session[`${numb}`] = true;
            return numb;
        }
    }

    for(let i =0; i < 6; i++){
        let randomNumb = selfieCheck(Math.ceil((Math.random() * 100) % 45))
        
        document.getElementById(`numb-${i+1}`).innerText = randomNumb;
         
            
    }
})