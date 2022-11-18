/*Javascript File*/


var cart ={};

if(localStorage.getItem("cart")){
	cart = JSON.parse( localStorage.getItem("cart"));
}
 $("[data-id]").click(function(){
	let id = $(this).attr("data-id");
	let price = $(this).attr("data-price");
	let title = $(this).attr("data-title");
	
	if (id in cart)
		{
		cart[id].qty++;
	cart[id].total = cart[id].qty * cart[id].price;	
			
		} else{
	let qty = 1;
	let total = price;
    let cartItem = {
        title: title,
        price: price,
        qty: qty,
		total:total
		};
cart[id] = cartItem;
}
localStorage.setItem("cart", JSON.stringify(cart));
 });
localStorage.setItem("cart", JSON.stringify(cart));		
