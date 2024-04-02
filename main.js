

(function (n, t, a, e, co) {
  var i = "aptrinsic"; n[i] = n[i] || function () {
    (n[i].q = n[i].q || []).push(arguments)
  }, n[i].p = e; n[i].c = co;
  var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
  var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-Z57KBTR9DEZC-2");


function login() {
  var a = document.getElementById('UserEmail').value;
  

  const accounts = ["1P02FZ38WSGGQ6IRNLTDJN7XVDANK6ZZXBZG", "1P02FZ38WSGGQ6IRNLVGGN3HTZTXMPFD1TLB", "1P02FZ38WSGGQ6IRNLI9O46ZY0CG561W1KR8", "1P02FZ38WSGGQ6IRNLK6DI49MP7LWY6YFUX4", "1P02FZ38WSGGQ6IRNLYQBY4IR4D7C2IBV7X9"];
  const mailId = ["dimple@gmail.com", "monica@gmail.com", "chandler@gmail.com", "ross@gmail.com", "phoebe@gmail.com"];

  for (var i = 0; i < accounts.length; i++) {
    if (a == mailId[i]) {
        var userid = mailId[i].substring(4, 9);
        if (a == "dimple@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1P02FZ38WSGGQ6IRNLTDJN7XVDANK6ZZXBZG",
              name:"Amazon"
            });
        }
        else if (a == "monica@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1P02FZ38WSGGQ6IRNLVGGN3HTZTXMPFD1TLB",
              name:"Cadbury"
            });
        }
        else if (a == "chandler@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1P02FZ38WSGGQ6IRNLI9O46ZY0CG561W1KR8",
              name:"Microsoft"
            });
        }
        else if (a == "ross@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },
            
            {
              id:"1P02FZ38WSGGQ6IRNLK6DI49MP7LWY6YFUX4",
              name:"Myntra"
            });
        }
        else if (a == "phoebe@gmail.com") {
          aptrinsic("identify",
            {
              id: userid,
              email: a
            },

            {
              id:"1P02FZ38WSGGQ6IRNLYQBY4IR4D7C2IBV7X9",
              name:"Tata"
            }
            );
        }
        alert("Your Unique Id is : " + " " + userid);
        location = "index.html"
      }

    
    }
  }
  




function message() {
  var email = document.getElementById('email');
  if (email.value === '') {
  }
  else {
    alert("Details saved succesfully!");
  }
}


function calculate() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var bmi;

  var bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi >= 17 & bmi < 18.5) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as THIN, Eat well sweet!');
  }
  else if (bmi >= 18.5 & bmi < 25) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as NORMAL, You are perfect sweet!');
  }
  else if (bmi >= 25 & bmi <= 30) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as OVERWEIGHT, Go gym sweet!');
  }
  else if (bmi > 30) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as OBESE, Go gym sweet!');
  }
}

function logout(){
  window.aptrinsic('reset');
}
/*
function login(form) {
  if (form.UserEmail.value=="dsgurivelli@gainsight.com")
   { 
  if (form.Password.value=="nopassword") {              
  location="index.html" 
  } else {
  alert("Incorrect Password")
  }
  } 
  else {  alert("Incorrect Email")
  }
  } */



