const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#number").value,
  };
  let val = document.querySelector("#email").value;
  localStorage.setItem(`${val}`, JSON.stringify(formData));
  let res = JSON.parse(localStorage.getItem(val));
  const dis = document.querySelector(".display");
  const el = document.createElement("li");
  el.innerText = res.email;
  const el1 = document.createElement("li");
  el1.innerText = `- ${res.name}-${res.phone}`;
  el.style.marginBottom = "5px";
  const del = document.createElement("button");
  del.innerText = "Delete";
  del.style.padding = "5px 10px";
  del.style.backgroundColor = "green";
  del.style.border = "1px solid green";
  del.style.borderRadius = "20px";
  del.style.marginLeft = "20px";
  el1.append(del);
  el1.style.display = "inline-block";
  el.append(el1);
  dis.append(el);
});
const rem = document.querySelector(".display");
rem.addEventListener("click", (e) => {
  let val = e.target;
  if (val.innerText === "Delete") {
    let temp = val.parentElement.parentElement;
    localStorage.removeItem(temp.firstChild.textContent);
    temp.remove();
  }
});
