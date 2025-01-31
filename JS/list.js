const productId = 1163;
const productListContainer = document.querySelector(".product-list-container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
	.then((response) => response.json())
	.then((dataOfPorducts) => showList(dataOfPorducts));
{
	function showList(products) {
		console.log(products);
		let markup = "";
		products
			.map((product) => {
				markup += `<article class="product onSale">
                    <div class="sold-out">${product.soldout}</div>
				<img src="./IMAGES/Product images/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
				<h6 class="product_name">${product.productdisplayname}</h6>
				<div class="p-categories">
					<p class="type">${product.articletype}</p>
					<p class="separator">|</p>
					<p class="brand">${product.brandname}</p>
				</div>
				<div class="price">
					<p class="price">${product.price}</p>
					<div class="discount">
						<p class="discount_price">${product.discount}</p>
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
		productListContainer.innerHTML = markup;
	}
	// productContainer.innerHTML = `JSON kode her`;
}
