const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

function handleCheck(event) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  console.log(event, lastChecked);
  
  if (event.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check them in between!");
      }
      
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}