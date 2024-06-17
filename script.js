
let recordX=[];
let recordO=[];
let indexX=0;
let indexO=0;
let comment=document.querySelector("#comment");
let winCondition=[[0,1,2], [3,4,5], [6,7,8],
                  [0,3,6], [1,4,7], [2,5,8],
                  [0,4,8], [2,4,6]];



function winlogic(str,rcrd){
    let match=0;
    
    for(let i=0; i<8; i++){
        for(let j=0; j<3; j++){
            for(let k=0; k<rcrd.length; k++){
                if(winCondition[i][j]==rcrd[k]){
                    match= match+1;

                }
            }

        }
        if(match==3){

            console.log(str, " won");
            comment.innerText="👑 "+str+" won👑";
            turnNum=10;
        }
        match=0;
    }
    
}

function check(i,str){
    if(str=="X"){
        recordX[indexX]=i;
        indexX++;
        winlogic(turn, recordX);
    }
    else if(str=="O"){
        recordO[indexO]=i;
        indexO++;
        winlogic(turn, recordO);
    }
}

let box= document.querySelectorAll(".box");
let index=0;
let turn="X";

console.log("this is X turns");
comment.innerText="This is X turns";
let turnNum=1;




for(let i=0; i<9; i++){
    box[i].addEventListener("click", () =>{
        for(let a=0; a<recordX.length || a<recordO.length; a++){
            if(recordX[a]==i || recordO[a]==i){
                exit(0);
            }
        }
        if (turnNum!=10){
            index=i;
            box[index].innerText=turn;
            if(turn=="X"){
                console.log("this is O turns");
                comment.innerText="This is O turns";
                turnNum++;              
                check(i,turn);
               
                turn="O";
                
            }
            else{
                
                console.log("this is X trus");
                comment.innerText="This is X turns";
                turnNum++;
                check(i,turn);
                
                turn = "X";


            }
        }       
    });
}

