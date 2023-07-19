document.getElementById("myButton").addEventListener("click", function () {
  const checkbox = document.getElementById("myCheckbox");
  if (!checkbox.checked) {
    alert("Click the checkbox to proceed");
  }
});
