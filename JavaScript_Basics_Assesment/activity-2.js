

alert("JAVASCRIPT ASSESSMENT 2!")
var userName = prompt('What is your name?');


if(userName.length > 4)
{
    alert(`The name ${userName} is GREATER than 4 characters `)
}
else if(userName.length == 4)
{
    alert(`The name ${userName} is EXACTLY 4 characters `)
}
else
{
    alert(`The name ${userName} is LESS than 4 characters `)
}


