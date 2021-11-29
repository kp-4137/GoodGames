// cart and quantities defined here
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const quantities = JSON.parse(localStorage.getItem("quantities")) || [];

// returns corresponding category folder
const categoryToFolder = {
  "Action Figures": "action_figures",
  "Board Games": "board_games",
  "Building Blocks": "building_blocks",
  "Cards": "cards",
  "Cars and Motorcycles": "cars_and_motorcycles"
}

// Alerts when leaving page and search input has content
// get the product search input element
if (document.getElementById("productSearch") !== null) {
  const beforeUnloadListener = (event) => {
    event.preventDefault();

    // custom message can't be modified
    return event.returnValue = "Leave site?";
  };

  const productSearchInput = document.getElementById("productSearch");

  // add an event listener such that an alert triggers if search has content 
  // and window is being closed/going to a new tab
  productSearchInput.addEventListener("input", event => {
    if (event.target.value !== "") {
        // add the event listener
        addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    } else {
        // remove the event listener when search is empty
        removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    }
  });
}

// fetches data from mySQL database, given an endpoint
async function fetchData(endpoint) {
  try {
      let response = await fetch(endpoint);
      return await response.json();
  } catch (error) {
      console.log(error);
  }
}