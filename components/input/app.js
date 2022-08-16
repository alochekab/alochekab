document.querySelector("input").addEventListener("blur", function() {
    var input = document.querySelector("input").value;
    var label = document.querySelector("label");
    if (input) {
      label.classList.add("label-old");
      label.classList.remove("label");
    } else {
      label.classList.add("label");
      label.classList.remove("label-old");
    }
  });
  