/* function sendingData(data) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:6001/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      if (response.success) {
        console.log("Success");
      } else {
        console.log("Failure");
        console.log(response.jwt);
        console.log(response.usuario);
      }
    }
  };
}
 */

function captureData() {
  let login = document.getElementById("LoginInput").value;
  let password = document.getElementById("passwordInput").value;
  return { login, password };
}

function sendData(data) {
  let http = new XMLHttpRequest();
  let url = "http://localhost:6001/login";
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/json");

  http.onreadystatechange = function () {
    //Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
    }
  };
  http.send(data);
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("loginButton").addEventListener("click", function () {
    let data = captureData();
    sendData(data);
  });
});
