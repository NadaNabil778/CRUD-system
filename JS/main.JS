
let products = []
if (localStorage.getItem('x') == null) {
    products = []

}
else {
    products = JSON.parse(localStorage.getItem('x'))
    display()
}


let ProductName = document.getElementById('ProductName')
let ProductCategory = document.getElementById('ProductCategory')
let ProductPrice = document.getElementById('ProductPrice')
let ProductDescription = document.getElementById('ProductDescription')
function getData() {

    product = {
        ProductName: ProductName.value,
        ProductCategory: ProductCategory.value,
        ProductPrice: ProductPrice.value,
        ProductDescription: ProductDescription.value

    }
    products.push(product)
    localStorage.setItem('x', JSON.stringify(products))
    display()
    clear()

}


function display() {
    let copaya = ``
    for (i = 0; i < products.length; i++) {
        copaya += `
    <tr>
    <td>${i}</td>
    <td>${products[i].ProductName}</td>
    <td>${products[i].ProductCategory}</td>
    <td>${products[i].ProductPrice}</td>
    <td>${products[i].ProductDescription}</td>
    <td><button onclick="Delete(${i})" class="btn btn-danger" href="">Delete</button></td>
   
</tr>

    `
    }
    document.getElementById('demo').innerHTML = copaya



}
function Delete(index) {
    products.splice(index, 1)
    localStorage.setItem('x', JSON.stringify(products))
    console.log(products);
    display()


}





function clear() {
    ProductName.value = ''
    ProductCategory.value = ''
    ProductPrice.value = ''
    ProductDescription.value = ''

}
function search() {
    let searchInput = document.getElementById('searchInput').value
    let box2 = ``
    for (let i = 0; i < products.length; i++) {
        if (products[i].ProductName.toLowerCase().includes(searchInput.toLowerCase())) {
            box2 += `
            <tr>
            <td>${i}</td>
            <td>${products[i].ProductName}</td>
            <td>${products[i].ProductCategory}</td>
            <td>${products[i].ProductPrice}</td>
            <td>${products[i].ProductDescription}</td>
            <td><button onclick="Delete(${i})" class="btn btn-danger" href="">Delete</button></td>
        </tr>`}
    }
    document.getElementById('demo').innerHTML = box2
}
