const getBtn = document.getElementById("loginButton");
//const postBtn = document.getElementById('post-btn');

const data = {
  login: "Baldan",
  password: "Hero",
};

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "http://localhost:6001/login", data).then(
    (responseData) => {
      console.log(responseData);
    }
  );
};

/* const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in'
    // password: 'pistol'
  })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err);
    });
}; */

/* postBtn.addEventListener('click', sendData); */

document.addEventListener("DOMContentLoaded", function (event) {
  getBtn.addEventListener("click", function () {
    console.log("Hello");
    console.log(data);
    getData();
  });
});
