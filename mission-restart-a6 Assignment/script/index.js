
const loadSwiftCart = () => {
  loadCategory('all');
};


const loadCategory = (category) => {
  let url = 'https://fakestoreapi.com/products';
  
  if (category !== 'all') {
    url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => displayProducts(data));
};


const displayProducts = (products) => {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "bg-white  rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden";

    card.innerHTML = `
      <!-- Image -->
      <div class="bg-gray-100 p-6">
        <img src="${product.image}" class="h-48 mx-auto object-contain" />
      </div>

      <!-- Content -->
      <div class="p-5">
        <div class="flex justify-between items-center text-sm mb-2">
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs">${product.category}</span>
          <span class="flex items-center gap-1 text-yellow-500">
            ⭐ ${product.rating.rate}
            <span class="text-gray-400 text-xs">(${product.rating.count})</span>
          </span>
        </div>

        <h3 class="font-semibold text-gray-800 mb-2">${product.title.slice(0, 40)}...</h3>
        <p class="text-lg font-bold text-gray-900 mb-4">$${product.price}</p>

        <div class="flex gap-3">
          <button class="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <a href="./details.html?id=${product.id}">Details</a>
          </button>
          <button class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Add
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};

loadSwiftCart();

const loadFeaturedProducts = () => {
  fetch('https://fakestoreapi.com/products?limit=3') 
    .then(res => res.json())
    .then(data => displayFeaturedProducts(data));
};

const displayFeaturedProducts = (products) => {
  const container = document.getElementById("featuresContainer");
  container.innerHTML = ""; 

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden";

    card.innerHTML = `
      <!-- Image -->
      <div class="bg-gray-100 p-6">
        <img src="${product.image}" class="h-48 mx-auto object-contain" alt="${product.title}" />
      </div>

      <!-- Content -->
      <div class="p-5">
        <div class="flex justify-between items-center text-sm mb-2">
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs">${product.category}</span>
          <span class="flex items-center gap-1 text-yellow-500">
            ⭐ ${product.rating.rate}
            <span class="text-gray-400 text-xs">(${product.rating.count})</span>
          </span>
        </div>

        <h3 class="font-semibold text-gray-800 mb-2">${product.title.slice(0, 40)}...</h3>
        <p class="text-lg font-bold text-gray-900 mb-4">$${product.price}</p>

        <div class="flex gap-3">
          <button class="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <a href="./details.html?id=${product.id}">Details</a>
          </button>
          <button class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Add
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};


loadFeaturedProducts();


