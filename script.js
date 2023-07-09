function validationForm() {
  let validationName = document.forms["register"]["name"].value;
  let validationAuthor = document.forms["register"]["author"].value;
  let validationStudio = document.forms["register"]["studio"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationName == "") {
    alert("O nome deve ser prenchido ");
    return false;
  }
  if (validationAuthor == "") {
    alert("O nome do autor deve ser prenchido ");
    return false;
  }
  if (validationStudio == "") {
    alert("O nome do estúdio deve ser prenchido ");
    return false;
  }
  if (validationDate == "") {
    alert("A data deve ser prenchida ");
    return false;
  }
  if (validationRadio == "") {
    alert(" Um género deve ser selecionado ");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}

function insert() {
  let name = document.forms["register"]["name"].value;
  let author = document.forms["register"]["author"].value;
  let studio = document.forms["register"]["studio"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
        <th scope="row">${name}</th>
        <td>${author}</td>
        <td>${studio}</td>
        <td>${date}</td>
      <td>${radio}</td>
        `;
}
