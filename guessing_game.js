var input= document.getElementById("text");
var button= document.getElementById("submit");
var check= document.getElementById("check");
var random= Math.floor(Math.random()*10+1);

function guess(){
    var inp= input.value;
    if (inp > random){
        check.innerText="The Number Is Too Big! Try Guessing A Smaller Number!";
        check.style.color='red';
    }
    else if(inp < random){
        check.innerText="The Number Is Too Small! Try Guessing A Larger Number!";
        check.style.color='red';
    }
    else{
            check.innerText="You Guessed The Number Correct!";
            check.style.color='green';
    }
}
button.addEventListener("click", guess);