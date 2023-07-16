var form = document.getElementById("contenttext");
// or let form - document.querySelector("form"); to get <form>
var sender = document.getElementById("formask");
sender.addEventListener("submit", breakdown);

function tester(form) {
  form.preventDefault();
  console.log("tester");
}

function breakdown(sender) {
  sender.preventDefault();
  const formlength = form.length;
  const formlimit = /\[|\]/; // ask [ or ]
  const formtext = form.value; 
  formtext.substring(0, formlength);
  var test = formtext.split(formlimit);
  let output = document.getElementById("output");
  const answer = calcu(test);
  output.textContent = answer;
}

function calcu(test) {
  let outputtext = [];
  const tooog = test.length;
  let i = 0;

  for (let n = 0; n < tooog; n++) {
    if (test[n] == "" || test[n] == " ") {
    } else {
      outputtext[i] = test[n];
      i++;
    }
  }

  // maybe have more effective method

  console.log(outputtext);
  const oooog = outputtext.length;
  let last = "";

  for (let n = 0; n < oooog; n++) {
    last = last + outputtext[n] + "\n";
  }

  // this circle need too

  console.log(oooog);
  let count = document.getElementsByClassName("titletext2");
  console.log(count);
  count[0].textContent = "output: " + oooog;
  return last;
}
