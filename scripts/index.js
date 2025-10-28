const loadCustomerDetails = () => {
  url = "https://dummyjson.com/carts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCustomerDetails(data.carts));
};
// "total": 103774.85,
//       "discountedTotal": 89686.65,
//       "userId": 33,
//       "totalProducts": 4,
//       "totalQuantity": 15

// display customer details
const displayCustomerDetails = (carts) => {
//   console.log(carts);
  const customer_details = document.getElementById("customer-datails");
  carts.forEach((id) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card bg-base-100 shadow-sm">
  <figure>
    <img class="w-40"
      src="./resources/image.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Customer- ${id.id}</h2>
    <h3>Total Products: ${id.totalProducts}</h3>
 <h3>Total Quantity: ${id.totalQuantity}</h3>
 <h3 class="text-sm">Total: ${id.total}</h3>
 <h2 class="font-bold text-base">Discounted Total: ${id.discountedTotal}</h2>
    <div class="card-actions justify-center">
      <button onclick="loadViewCustomerDetails(${id.id})" class="btn btn-primary">View Details</button>
    </div>
  </div>
            </div>
        
        `;
    customer_details.appendChild(div);
  });
};

loadCustomerDetails();
