const cartContainer = document.getElementById("cart-container");
const cruisesContainer = document.getElementById("cruises-container");
const tripCards = document.getElementById("trip-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const trips = [
  {
    id: 1,
    name: "Iberian Coast, Canary Islands & Madeira",
    price: 1.159,
    duration: 12,
  },
  {
    id: 2,
    name: "Northern Europe",
    price: 389,
    duration: 2,
  },
  {
    id: 3,
    name: "Mediterranean",
    price: 549,
    duration: 7,
  },
  {
    id: 4,
    name: "Caribbean",
    price: 289,
    duration: 4,
  },
  {
    id: 5,
    name: "Caribbean",
    price: 1.919,
    duration: 14,
  },
  {
    id: 6,
    name: "Dubai, Abu Dhabi & Qatar",
    price: 699,
    duration: 6,
  },
  {
    id: 7,
    name: "Dubai, Abu Dhabi & Qatar",
    price: 889,
    duration: 7,
  },
  {
    id: 8,
    name: "Asia",
    price: 469,
    duration: 4,
  },
  {
    id: 9,
    name: "Canary Islands and Madeira",
    price: 649,
    duration: 7,
  },
  {
    id: 10,
    name: "MSC Grand Voyages",
    price: 1.259,
    duration: 22,
  },
  {
    id: 11,
    name: "Panama Canal",
    price: 2.918,
    duration: 33,
  },
  {
    id: 12,
    name: "South Africa",
    price: 199,
    duration: 2,
  },
  {
    id: 13,
    name: "South Africa",
    price: 479,
    duration: 5,
  },
  {
    id: 14,
    name: "South America",
    price: 443,
    duration: 4,
  },
  {
    id: 15,
    name: "South America",
    price: 1.549,
    duration: 20,
  }
];

trips.forEach(({ name, id, price, duration }, index) => {
  const nameColor = index % 2 === 0 ? "#7dfae9" : "#fee440"; 

  tripCards.innerHTML += `
    <div class="trip-card">
      <h2 style="color: ${nameColor};">${name}</h2>
      <p class="trip-price">£${price}</p>
      <p class="trip-duration" style="#fff;">Duration: ${duration} nights</p>
      <button id="trip-${id}" class="btn add-to-cart-btn">Add to cart</button>
    </div>
  `;
});

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, trips) {
    const trip = trips.find((item) => item.id === id);
    if (!trip) return;

    this.items.push(trip);

    const totalCountPerCruise = {};
    this.items.forEach((cruise) => {
      totalCountPerCruise[cruise.id] = (totalCountPerCruise[cruise.id] || 0) + 1;
    });

    const currentCruiseCount = totalCountPerCruise[trip.id];

    let tripElement = document.getElementById(`cart-item-${id}`);
    
    if (!tripElement) {
      cruisesContainer.innerHTML += `
        <div id="cart-item-${id}" class="cruise">
          <p>
            <span class="cruise-count" id="cruise-count-for-id${id}">${currentCruiseCount}x</span> ${trip.name}
          </p>
          <p>£${trip.price.toFixed(2)}</p>
        </div>
      `;
    } else {
      document.getElementById(`cruise-count-for-id${id}`).textContent = `${currentCruiseCount}x`;
    }

    this.calculateTotal();
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");
    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      cruisesContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = "$0";
      cartTaxes.textContent = "$0";
      cartTotal.textContent = "$0";
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
  }
}

const cart = new ShoppingCart();

setTimeout(() => {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const tripId = Number(event.target.id.replace("trip-", ""));
      cart.addItem(tripId, trips);
      totalNumberOfItems.textContent = cart.getCounts();
    });
  });
}, 100);

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", () => {
  cart.clearCart();
});

