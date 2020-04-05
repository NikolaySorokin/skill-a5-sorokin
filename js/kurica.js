let obj = {
  var1: "",
  var2: "",
  var3: "",
  var4: "",
  var5: "",
  var6: "",
  speach: ""
};

function pushTheBtn() {
  printSkazka(skazka);
}

function printSkazka(data) {
  let skazka = "";

  for (key in obj) {
    obj[key] = $("input[name=" + key + "]")[0].value;
  }

  data["text"].forEach(function(item, index) {
    for (key in obj) {
      item = item.replace("{" + key + "}", obj[key]);
    }
    skazka = skazka + item + "<br>";
  });

  for (key in obj) {
    if (obj[key] == "") skazka = "Необходимо заполнить все поля формы!";
  }

  $(".result").html(skazka);
}

function init() {
  $(".start-btn").click(pushTheBtn);
}

$(document).ready(init);
