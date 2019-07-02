
/*window.addEventListener("load",function(){*/
var database = [
        {
            username:"Jai",
            password:"123456"
        },
        {
            username:"Mitch",
            password:"coffee"
        },
        {
            username:"xyz",
            password:"abc"
        }
    ];
var newsfeed = [
    {
        username:"Bobby",
        timeline:"tired"
    },
    {
        username:"Ajay",
        timeline:"hungry"
        }
    ];
var userprompt = prompt("What's your username");
var passwordprompt = prompt("What's your password");
function uservalid(id,pass){
    for(var i=0;i<database.length;i++){
        if(id===database[i].username && pass===database[i].password){
            return true;
        }
    }
    return false;
}
function login(id,pass){
    if(uservalid(id,pass)=== true){
        console.log(newsfeed);
    }
    else{
        alert("Wrong username or password");
    }

    
}
login(userprompt,passwordprompt);



