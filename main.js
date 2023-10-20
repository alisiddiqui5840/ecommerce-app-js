const product = [

    {
        id: 0,
        image: 'images/aa-4.jpg',
        tittle: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'images/aa-3.jpg',
        tittle: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'images/aa-2.jpg',
        tittle: '250D Dslr Camera',
        price: 30,
    },
    {
        id: 3,
        image: 'images/aa-1.jpg',
        tittle: 'Head Phones',
        price: 70,
    },
    {
        id: 4,
        image: 'images/aa-5.jpg',
        tittle: 'IPhone 12 pro max',
        price: 800,
    },
    {
        id: 5,
        image: 'images/aa-6.jpg',
        tittle: 'Key Chain',
        price: 10,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image,tittle,price} = item;
        return(
            `<div class='box'>
                <div class = 'img-box'>
                    <img class='images' src = ${image}></img>
                </div>
                <div class = 'bottom'>
                    <p>${tittle}</p>
                    <h2> $ ${price}.00</h2> `+ 
                    "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
                    `</div>
                    </div>`
                    )

    }).join('')
    var Cart = [];
    function addtocart(a)
    {
        Cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        Cart.splice(a,1);  
        displaycart();
    }
    function displaycart(a){
        let total = 0;
        let j = 0;
        document.getElementById("count").innerHTML=Cart.length;
        if(Cart.length==0){
            document.getElementById('cartItem').innerHTML ="Your cart is empty";
            document.getElementById("total").innerHTML = "$" + 0 + ".00";


        }

        else{
            document.getElementById("cartItem").innerHTML = Cart.map((items) =>
            {
                var {image,tittle,price} = items;
                total = total + price;
                console.log(total);
                document.getElementById("total").innerHTML = "$"+ total +".00";
                
                

                return(
                `<div class='cart-item'>
                <div class = 'row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style = 'font-size:12px;'> ${tittle}
                </p> 
                <h2 style = 'font-size:15px;'>$ ${price}.00</h2> `+ 
                "<i class = 'fa-solid fa-trash' onclick ='delElement("+ (j++) +")'></i></div>"
                );
            }
        ).join(``);
    }
    const button = document.getElementById("Checkout");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Use window.location to navigate to the desired URL
    window.location.href = "Registration.html";
});
}
