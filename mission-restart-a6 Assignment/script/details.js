const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.getElementById("productDetails");


container.innerHTML = `
  <div class="col-span-2 text-center">
    <span class="loading loading-spinner loading-lg text-indigo-600"></span>
  </div>
`;


fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res => res.json())
  .then(product => {

    container.innerHTML = `
      <!-- Image -->
      <div class="flex justify-center items-center">
        <img src="${product.image}" 
             class="h-96 object-contain">
      </div>

      <!-- Info -->
      <div class="flex flex-col justify-center">
        <h2 class="text-3xl font-bold mb-4">
          ${product.title}
        </h2>

        <p class="text-sm text-gray-500 mb-2 capitalize">
          Category: ${product.category}
        </p>

        <div class="flex items-center gap-2 mb-4">
          <span class="text-yellow-500">
            <i class="fa-solid fa-star"></i>
          </span>
          <span>${product.rating.rate}</span>
          <span class="text-gray-500">
            (${product.rating.count} reviews)
          </span>
        </div>

        <p class="text-2xl font-bold text-indigo-600 mb-4">
          $ ${product.price}
        </p>

        <p class="text-gray-600 mb-6 leading-relaxed">
          ${product.description}
        </p>

        <button class="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition w-fit">
          Add to Cart
        </button>
      </div>
    `;

  })
  .catch(error => {
    container.innerHTML = `
      <div class="col-span-2 text-center text-red-500 text-xl">
        Product Not Found
      </div>
    `;
  });
