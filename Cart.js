
function IDgen(){
	return (new Date()).getTime();
}
function addToCard(Name,Price)
{
	const orders = JSON.parse(localStorage.getItem("order") ?? '[]');
	const order = {id:IDgen(),Name:Name,Price:Price};
	orders.push(order);
	localStorage.setItem("order",JSON.stringify(orders));
	localStorage.getItem("order");
}