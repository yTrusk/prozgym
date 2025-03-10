function searchgym() {
  document.getElementById("loaderid").style.display = "flex";
  setInterval(() => {
    window.location = "../routes/signup.html";
  }, 700);
}
let buttonActived = "login";
function alternate(btn) {
  const btns = document.getElementById("loginpg");
  const btnss = document.getElementById("signuppg");
  const log = document.getElementById("logindiv");
  const sign = document.getElementById("signupdiv");
  if (btn === "login") {
    if (btn !== buttonActived) {
      btns.style.backgroundImage =
        "linear-gradient(to right, blueviolet, rgb(190, 3, 181))";
      btns.addEventListener("mouseenter", () => {
        btns.style.filter = "brightness(120%)";
      });
      btns.addEventListener("mouseleave", () => {
        btns.style.filter = "brightness(100%)";
      });
      btnss.style.background = "white";
      btnss.addEventListener("mouseenter", () => {
        btnss.style.filter = "brightness(80%)";
      });
      btnss.addEventListener("mouseleave", () => {
        btnss.style.filter = "brightness(100%)";
      });
      log.style.display = "block";
      sign.style.display = "none";
      buttonActived = btn;
    }
  } else {
    if (btn !== buttonActived) {
      btnss.style.backgroundImage =
        "linear-gradient(to right, blueviolet, rgb(190, 3, 181))";
      btnss.addEventListener("mouseenter", () => {
        btnss.style.filter = "brightness(120%)";
      });
      btnss.addEventListener("mouseleave", () => {
        btnss.style.filter = "brightness(100%)";
      });
      btns.style.background = "white";
      btns.addEventListener("mouseenter", () => {
        btns.style.filter = "brightness(80%)";
      });
      btns.addEventListener("mouseleave", () => {
        btns.style.filter = "brightness(100%)";
      });
      log.style.display = "none";
      sign.style.display = "block";
      buttonActived = btn;
    }
  }
}

function signupfunction() {
  const user = document.getElementById("userinput").value;
  const password = document.getElementById("passinput").value;
  const email = document.getElementById("emailinput").value;
  const cpf = document.getElementById("cpfinput").value;
  const data = {
    user: user,
    password: password,
    email: email,
    cpf: cpf,
  };
  document.getElementById("loaderid").style.display = "flex";
  fetch("http://localhost:3333/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => {
      if (result.code == 201) {
        document.getElementById("loaderid").style.display = "none";
        alert("USER CREATED");
      } else {
        document.getElementById("loaderid").style.display = "none";
        alert(`ERROR: ${result.content}`);
      }
    })
    .catch((err) => console.error("Error:", err));
}

function signinfunction() {
  const user = document.getElementById("userinputlg").value;
  const password = document.getElementById("passinputlg").value;
  const data = {
    user: user,
    password: password,
  };
  document.getElementById("loaderid").style.display = "flex";
  fetch("http://localhost:3333/userlg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => {
      if (result.code == 200) {
        document.getElementById("loaderid").style.display = "none";
        alert("USER LOGGED SUCESS!");
      } else {
        document.getElementById("loaderid").style.display = "none";
        alert("INCORRECT DATA");
      }
    })
    .catch((err) => console.error("Error:", err));
}
