const ulist = document.querySelector("ul");
const inpt = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  const inputValue = inpt.value;
  inpt.value = "";

  const list = document.createElement("li");
  const spn = document.createElement("span");
  const button = document.createElement("button");

  list.appendChild(spn);
  list.appendChild(button);

  spn.textContent = inputValue;
  button.textContent = "Delete";

  ulist.appendChild(list);

  button.addEventListener("click", () => {
    list.remove();
  });

  inpt.focus();
});