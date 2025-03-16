// Place order  for admin
const allOrder = async (req, res) => {};

// Place order for frOntend
const userOrders = async (req, res) => {};

// Place order using cash on delivery
const placeOrder = async (req, res) => {};

// Place order using stripe
const placeOrderStripe = async (req, res) => {};

// Place order using RazOrPay
const placeOrderRazOrPay = async (req, res) => {};

// Update status admin
const updateStatus = async (req, res) => {};

export {
  allOrder,
  userOrders,
  placeOrder,
  placeOrderRazOrPay,
  placeOrderStripe,
  updateStatus,
};
