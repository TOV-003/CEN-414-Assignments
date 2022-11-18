  	var cart = {};
$(document).ready(function() {
    DrawTable();
    

    $("#empty-cart").click(function() {
        let cart = {};
        localStorage.setItem("cart", JSON.stringify(cart));
		DrawTable();
    });

    

   
});
function DrawTable(){

	
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    let TableContent = $("#tbody");
	TableContent.empty();
    var Total = 0;
    var NumberOfItems = 0;



    for (let identifier in cart) {
        let product = cart[identifier];
        if (product.qty == 0) {
            delete cart[identifier];
            localStorage.setItem("cart", JSON.stringify(cart));

        }
        let tr = $("<tr></tr>");

        let title_td = $("<td></td>").text(product.title);
        tr.append(title_td);

        let price_td = $("<td></td>").text("$ " + product.price.toLocaleString("en-US"));
        tr.append(price_td);

        let qty_td = $("<td></td>").text(product.qty);
        
        tr.append(qty_td);


        let total_td = $("<td></td>").text("$ " + product.total.toLocaleString("en-US"));
        tr.append(total_td);

        let delete_td = $("<td></td>").text(`Delete`);
        delete_td.attr("data-identifier", identifier);
        delete_td.attr("remover", "delete");
        delete_td.addClass("btn btn-outline-danger");
        tr.append(delete_td);

        TableContent.append(tr);
           Total += product.total;
        NumberOfItems = NumberOfItems + Number(cart[identifier].qty);
    }


    
$("#total").text("$ " + Total.toLocaleString("en-US"));

	$("[remover='delete']").click(function() {
        let value = $(this).attr("data-identifier");
        delete cart[value];
        localStorage.setItem("cart", JSON.stringify(cart));
        DrawTable();
    });
   }
