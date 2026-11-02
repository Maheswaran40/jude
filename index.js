// blocking
// non - blocking


// async  await 


// https://jsonplaceholder.typicode.com/users

async function getData() {
    let url = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await url.json();
    console.log("data", data);

    let showdata = ""
    data.map((v, i) => (
        showdata += `
         <div class="col-lg-3">
      <div class="card">
      ${v.name}
      </div>
     </div>
        `
    ))

    document.getElementById("name").innerHTML = showdata
}

getData()

// json = javascript object notation 
// [ { } , { }] 

// push ,pop , shift , unshift  , concat , sort , join , reverse ,split 
// map , filter , find
let arr = [1, 2, 2, 3, 4, 5]

console.log(arr.map((v, i) => v * 2));
console.log(arr);

console.log(arr.filter((v,i)=> v == 2));
console.log(arr.find((v,i)=> v == 2));



let arr1 = ["az", "b", "a"]

// console.log(arr);
// console.log(arr.sort());
// console.log(arr1.sort());

// lexicographically  [3] = 0 [1] = 1
// [4] = 0
// console.log(arr1.concat(arr));

// 1,2,3,4,5
// 0,1,2,3,4


// 1,2,3,4,5
// 1,2,3,4,5


// 1,2,3

// console.log(arr.slice(0,1));
// console.log(arr.splice(0,2,"mahes"));
// console.log(arr);


// let name = "ilife"
//  efili

// console.log(name.split("").reverse().join(""));






// console.log(arr.unshift(0));
// console.log(arr);

// console.log(arr.shift());

// console.log(arr);




// console.log(arr);

// console.log(arr.push(6));


// console.log(arr);



// console.log(arr.pop());
// console.log(arr);




