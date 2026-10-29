// function fun_name(parameters){
//     // variable creation local
//     statements()
//     statements()
//     statements()
// }
// fun_name(arguments) //function calling


// function fun1(){
//     var a=20
//     console.log("function is working 1" , a);
//     fun2(a)
// }

// fun1()


// function fun2(a){
//     console.log("function is working 2",a);

// }



// function fun2(a){
//     if(a>100){
//         console.log("function is working 2",a);
//     }
//     else if(){

//     }
//     else if(){

//     }
//     else if(){

//     }
//     else if(){

//     }
//     else{
//         console.log("a is lesserthan 100");

//     }

// }


// function fun2(a,b,c){
//     console.log("function is working 2",a,b,c);

// }

// fun2(200,300,400)




// function changeColor(){
//     // document.getElementById("h1tag").style.color = "red"
//     document.getElementById("h1tag").style.display = "none"
// }



// function spinFun(){
//     document.getElementsByTagName("img")[0].style.animation = "spin 2s linear 1 "
// }



// function formSubmit(e){
// e.preventDefault()
// let username = document.getElementById("name").value
// let email = document.getElementById("email").value
// console.log(username,email);


// }

let data = document.getElementById("output")

function addFun(e) {
    e.preventDefault()
    let value1 = Number(document.getElementById("value1").value)
    let value2 = Number(document.getElementById("value2").value)
    console.log("add", value1, value2);
    let output =value1 +value2
    data.innerHTML = `${value1} + ${value2} = ${output}`

}

function subFun(e) {
    e.preventDefault()
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    console.log("sub", value1, value2);

}

function multFun(e) {
    e.preventDefault()
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    console.log("mult", value1, value2);


}

function diviFun(e) {
    e.preventDefault()
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    console.log("did", value1, value2);

}