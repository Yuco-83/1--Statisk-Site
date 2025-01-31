// let productID = 1165;

// let productContainer = document.querySelector(".productContainer");
// fetch("https://kea-alt-del.dk/t7/api/products/1165")
//      .then((response) => response.json())
//      .then((data) => {
//           productContainer.innerHTML = `

//      });

const productContainer = document.querySelector(".productContainer");
const productId = 1530;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
	.then((response) => response.json())
	.then((data) => {
		productContainer.innerHTML = `JSON kode her`;
	});
