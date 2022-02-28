
// var arr=[];

// function add(){
//     var todo = document.getElementById("todo").value;
//     arr.push(todo);
//     view();
// }

// function view(){
//     count=arr.length;
//     var res ="";
//     for(var x=0; x<count; x++){
//         res += "<div> <br> My Name is: " + arr[x] + "<br><br><button  onclick=' remove(" + x + ") '>Remove</button><hr> <br> </div>";
//         document.getElementById("res").innerHTML = res;
//     }
// }

// function remove(x){
//     arr.splice(x,1);
//     view();
// }


// function addcolor(color){
//     window.localStorage.setItem("color",color);
//     making();
// }

// function making(){
//     document.body.style.background = window.localStorage.getItem("color");
// }

// window.onload = function(){
// making();
// }

// document.write("<table border='1' width='300px'>");
// for(let y=1 ; y<=8 ; y++){
//     document.write("<tr>");
//     for(let x=1 ; x<=8; x++){
//         let total = x + y;
//         if(total %2 ==1){
//             document.write("<td style = 'background:black; white:100px; height:50px;'></td>");
//         }
//             else{
//             document.write("<td style = 'background:white; width:100px; height:50px;'> </td>");
//         }
//         }
//         document.write("</tr>");
//     }
// document.write("</table>");



// class car{
//     constructor(color){
//         this.color = color; 
//     }
//     move(){
//         console.log(color);
//     }
// }

// let c1 = new car("red");
// c1.move();


// function User(name){
    
//     this.x = name;
//     console.log(this.x);
// }
// const use =new User("john");


// const user ={
//     firstName: "john",
//     secondName:"Doe",
//     pets : ["cat","dog","fish"],
//     listpets(){
//         this.pets.forEach(function(pet){
//             console.log(pet);
//             console.log(`${this.firstName}'s ${pet}`);
//         },);
//     }
// }
// user.listpets();



// document.getElementById("box").innerHTML="<h1>Hello</h1>";

$("#box").html("<h1>Hello</h1>");