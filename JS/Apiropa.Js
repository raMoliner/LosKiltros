$(document).ready(function () {
  var productContainer = $('#product-container');

  $.get('http://fakestoreapi.com/products', function (data) {
    $.each(data, function (index, product) {
      var card = `
        <div class="col-lg-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price: ${product.price}</p>
              <p class="card-text">Category: ${product.category}</p>
              <p class="card-text">Description: ${product.description}</p>
            </div>
          </div>
        </div>
      `;
      productContainer.append(card);
    });
  });
});