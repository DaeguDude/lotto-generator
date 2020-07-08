const button = document.getElementById("main-button")
let gameNumbArray = []; //game numb가 2차원 matrix형태로 저장되어 있는 배열
button.addEventListener("click",()=>{
    
    function selfieCheck(numb,session){
        //한 게임에 중복되어 있는 번호가 있는지 확인 하는 함수 및 최종적으로 중복되지 않은 번호를 돌려줌 
        if(session[`${numb}`]){
            return selfieCheck(Math.ceil((Math.random() * 100) % 45),session);
        }else{
            session[`${numb}`] = true;
            return numb;
        }
    }
    // 
    const inputValue = document.getElementById("numb-game-input").value;
    const gameNumb = !isNaN(inputValue) && inputValue > 0 ? inputValue : 0; //숫자가 아니고, 0보다 크면 value사용, 아니면 0;
    gameNumbArray = []; 
    for(let i =0; i <= gameNumb ; i++){
        const session = {};
        gameNumbArray[i] = [];
        for(let u = 0; u < 6; u++){
            let randomNumb = selfieCheck(Math.ceil((Math.random() * 100) % 45),session);
            if(i == 0){
                document.getElementById(`numb-${u+1}`).innerText = randomNumb;
            }
            gameNumbArray[i][u] = randomNumb;
            
        }   
    }
})