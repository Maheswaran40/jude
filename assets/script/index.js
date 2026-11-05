function signup(e) {
    e.preventDefault()
    let username = document.getElementById("username").value
    let useremail = document.getElementById("email").value
    let userpass = document.getElementById("password").value
    console.log(username, useremail, userpass);

    // localStorage.setItem(keyName , value)
    localStorage.setItem("username", username)
    localStorage.setItem("useremail", useremail)
    localStorage.setItem("userpass", userpass)


    window.location.href = "../../index.html"

}

function loginFun(e) {
    e.preventDefault()
    let useremail = document.getElementById("useremail").value
    let userpass = document.getElementById("userpass").value


    let localemail = localStorage.getItem("useremail")
    let localpass = localStorage.getItem("userpass")

    console.log(useremail, userpass, localemail, localpass);

    if (useremail == localemail && userpass == localpass) {
        window.location.href = "./assets/pages/home.html"
    } else {
        alert("username or password is invalid")
    }
}


document.getElementById("name-heading").innerHTML += ` ${localStorage.getItem("username")}`



let products = [
    { id: 1, name: "samsung", price: 10000, image: "../image/samsung.png" },
    { id: 2, name: "oppo", price: 8000, image: "../image/oppo.png" },
    { id: 3, name: "iphone", price: 70000, image: "../image/iphone.png" },
    { id: 4, name: "realme", price: 3044, image: "../image/realme.png" },
    { id: 4, name: "realme", price: 3044, image: "../image/realme.png" },
]


function showData() {
    let data = ""

    products.map((value, index) => (
        data += `
        <div class="col-lg-3">
                <div class="card">
                    <img src="${value.image}" height="200px" width="100%" alt="">
                    <div class="card-body">
                    <span>${value.name}</span>
                    <span>$${value.price}</span>
                    <button class="btn btn-info" onclick="cartFun(${value.id})">Cart</button>
                    </div>
                </div>
            </div>
        `
    ))

    document.getElementById("showProducts").innerHTML = data
}
showData()




function searchFun(e) {
    e.preventDefault()
    let searchData = document.getElementById("input").value

    let outputData = products.filter((v, i) => v.name.toLowerCase().trim().includes(searchData.toLowerCase().trim()))
    console.log(outputData);

    let data = ""

    outputData.map((value, index) => (
        data += `
        <div class="col-lg-3">
                <div class="card">
                    <img src="${value.image}" height="200px" width="100%" alt="">
                    <div class="card-body">
                    <span>${value.name}</span>
                    <span>$${value.price}</span>
                    </div>
                </div>
            </div>
        `
    ))

    document.getElementById("searchOutput").innerHTML = data


}


let cart = []

function cartFun(proID) {
    // alert(proID)
    let selectedProduct = products.find((v, i) => v.id == proID)
    console.log(selectedProduct);

    let existing = cart.find((v) => v.id == proID)

    if (!existing) {
        alert("product added")
        cart.push(selectedProduct)
        selectedProduct.quantity = 1

    }
    else {
        alert("quantity increased")

        selectedProduct.quantity++
    }

    console.log(cart);
    showCart(cart)

}

function showCart(cartData) {

    let data = " "
    cartData.map((v, i) => (
        data += `
        <tr>
            <td><img src="${v.image}" height="100px" width="100px" alt=""></td>
            <td>${v.name}</td>
            <td>${v.price}</td>
            <td>${v.quantity}</td>
            <td><button class="btn-close" onclick="deletePro(${v.id})"></button></td>
        </tr>
        `
    ))

    document.getElementById("cartData").innerHTML = data
}


function deletePro(proID){
    alert(proID)


    cart = cart.filter((v)=>v.id != proID)
    console.log("deletedItem");
    
    showCart(cart)
}

