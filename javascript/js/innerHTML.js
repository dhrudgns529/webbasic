const add_button = document.querySelector("button");

let userList = new Array();

add_button.onclick = () => {
  add_user();
  loadList();
  console.log(userList);
}

function add_user() {
  const inputs = document.querySelectorAll("input");

  let user = {
    name : inputs[0].value,
    address : inputs[1].value,
    phone : inputs[2].value
  }

  userList.push(user); // userlist 배열 추가
}

function loadList() {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  userList.forEach((user, index) => {
    tbody.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
          </tr>
          `
  });
  
}