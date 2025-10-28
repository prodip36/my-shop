
const loadViewCustomerDetails=(id)=>{
      url = "https://dummyjson.com/carts";
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
   
    data.carts.forEach(object => {

        if(object.id==id){
           
            // console.log(object.products);
            printData(object.products);
         
        }
    })
    
    
    )
}
    // {
    //       "id": 168,
    //       "title": "Charger SXT RWD",
    //       "price": 32999.99,
    //       "quantity": 3,
    //       "total": 98999.97,
    //       "discountPercentage": 13.39,
    //       "discountedTotal": 85743.87,
    //       "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
    //     },
const printData=(obj)=>{
      const customer = document.getElementById("customer-view-datails");
      const customer_d = document.getElementById("sec-customer");
      const customer_e = document.getElementById("sec-customer-details");
      customer_d.classList.add('hidden');
      customer_e.classList.remove('hidden');
    obj.forEach((items)=>{
          const div = document.createElement("div");
          div.innerHTML = `
                 <div class="card bg-base-100 shadow-sm">
  <figure>
    <img class="w-50 h-40"
      src="${items.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-2xl">${items.title}</h2>
    <h3 class="font-semibold text-xl text-gray-500">Quantity: ${items.quantity}</h3>
    <strike class="text-2xl text-gray-500">$${items.total}</strike>
    <h3 class="font-semibold text-3xl text-green-400">$${items.discountedTotal}</h3>
    <h3 class="text-xl text-gray-600">Discount: ${items.discountPercentage}%</h3>
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-block">Add More</button>
    </div>
  </div>
                </div>
                `;
          customer.appendChild(div);




    })
}