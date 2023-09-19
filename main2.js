// all products
const data = "https://fakestoreapi.com/products";
const list = document.querySelector(".list")
fetch(data)
.then((response) => response.json())
.then((data) => {
    let litag ;
    data.forEach((item) => {
        litag = document.createElement("li");
        litag.setAttribute("class" , "product")
        const innerlitag = `
        <div class = "myproducts">
        <div class = "imgicon">
        <img class = "product-img" src = "${item.image}" alt = "product"> 
        </div>
     <div class = "texts">
     <h2 class = "product-name" data-name = "${item.title}">
        <span>${item.title}</span>
        </h2>
        <div class = "product-price">${item.price}</div>
        <button type = "submit" class = "btn-sub">Add this product </button>
        </div>
           </div>
        `
        litag.insertAdjacentHTML("afterbegin" , innerlitag);
        list.append(litag);
    });
})