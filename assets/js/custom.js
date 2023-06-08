let form = document.getElementById("comment-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let full_name = document.getElementById("full-name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("phone-number").value;
  let comments = document.getElementById("comments").value;

  window.location.href = `mailto:vishnugmv3@gmail.com?subject=Enquiry from ${full_name} ${email} ${mobile}&body= ${comments}`;

  contact();
});
