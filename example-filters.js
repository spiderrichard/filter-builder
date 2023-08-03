function clearFilter() {
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }

// Get the select element
var selectedOption = document.getElementById("filter-selector");
var output = document.getElementById("filter-description");

// Add event listener for the change event
selectedOption.addEventListener("change", function() {
  // Get the selected value
  var selectedValue = selectedOption.value;

  // Call the corresponding function based on the selected value
  if (selectedValue === "select-filter") {
    output.textContent = "";
    clearFilter();
  } else if (selectedValue === "mass-transfer-filter") {
    output.textContent = "This filter shows only Pokemon with a rating less than 3 Stars, excluding some characteristis such as: Legendary, Lucky, Mythical, Shadow, Shiny, Event & Ultra beasts";
    clearFilter(), shiteFilter();
  } else if (selectedValue === "distance-trading-filter") {
    output.textContent = "This filter shows only Pokemon that where caught/hatched over 7500km away to help obtain the Pilot Medal. This filter also excludes: 4 Star, 3 Star, Legendary, Lucky, Mythical, Shadow, Shiny, Event & Ultra beasts ";
    clearFilter(), distanceTradeFilter();
  }
});