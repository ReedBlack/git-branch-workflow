var form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", getFormData);

function getFormData(event) {
  event.preventDefault();
  console.log("form was submitted");

  var data = new FormData(form);
  data = {
  subject: data.get("message"),
  message: data.get("subject")
};
console.log(data);
}
