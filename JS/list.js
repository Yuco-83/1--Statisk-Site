const productId = 1530;
const productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
	.then((response) => response.json())
	.then((dataOfPorducts) => showList(dataOfPorducts));
{
	function showList(products) {
		console.log(products);
		let markup = "";
		products
			.map((product) => {
				markup += `<article class="product">
				<img src="./IMAGES/Product images/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
				<h6 class="product_name">Sahara Team India Fanwear Round Neck Jersey</h6>
				<div class="p-categories">
					<p class="type">Tshirts</p>
					<p class="separator">|</p>
					<p class="brand">Nike</p>
				</div>
				<div class="price">
					<p class="price">1595,-</p>
					<div class="discount">
						<p class="discount_price">DKK 1595</p>
						<p class="discount-percent">34%</p>
					</div>
				</div>
				<a class="product" href="./product.html">
					Read More
				</a>
			</article>;`;
			})
			.join("");
		console.log(markup);
		listOContainer.innerHTML = markup;
	}
	// productContainer.innerHTML = `JSON kode her`;
}
