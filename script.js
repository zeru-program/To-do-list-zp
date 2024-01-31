document.addEventListener("DOMContentLoaded", cekHowManyList);
function cekHowManyList() {
  const blurBgSc = document.querySelector('.blurBgShorcut');
  const allIsi = document.querySelector(".list-user-all");
  const listInAllIsi = allIsi.querySelectorAll(".list");
  const divNotHave = document.createElement("div");
  divNotHave.innerHTML =
    "<p class='text-no-list-header'>You not have a task!</p><p class='text-no-list-sub'>go create the task</p>";
  divNotHave.classList.add("containerText");
  if (listInAllIsi.length === 0) {
    allIsi.appendChild(divNotHave);
  } else if (listInAllIsi.length > 0) {
    allIsi.removeChild(divNotHave);
  }
  const cekActGbrs = document.querySelectorAll(".check-act");
  var click = false;
  cekActGbrs.forEach(cekActGbr => {
    cekActGbr.addEventListener("click", () => {
      if (!cekActGbr.disabled) {
        cekActGbr.src = "loading.png";
        cekActGbr.style.animation = "load 2s ease";

        cekActGbr.disabled = true;
        setTimeout(function () {
          cekActGbr.src = "cekOn.png";
          var inputValue = allIsi.innerHTML;
          localStorage.setItem('valueList', inputValue);
        }, 2050);
      }
    });
  });
  blurBgSc.style.display = "flex";
}
  const blurBgSc = document.querySelector('.blurBgShorcut');
blurBgSc.onclick = function() {
  blurBgSc.style.display = "none";
}
const allIsi = document.querySelector(".list-user-all");
const proIsi = document.querySelector(".list-user-pro");
const finIsi = document.querySelector(".list-user-fin");
const allBtn = document.getElementById("all");
const proBtn = document.getElementById("pro");
const finBtn = document.getElementById("fin");
allBtn.onclick = function () {
  allIsi.style.transform = "translateX(0)";
  proIsi.style.transform = "translateX(300%)";
  finIsi.style.transform = "translateX(200%)";
  allBtn.classList.add("active");
  proBtn.classList.remove("active");
  finBtn.classList.remove("active");
};
/*    function pro() {
allIsi.style.transform  = "translateX(-200%)";
proIsi.style.transform  = "translateX(0)";
finIsi.style.transform  = "translateX(200%)";
allBtn.classList.remove('active');
proBtn.classList.add('active');
finBtn.classList.remove('active');
}
function fin() {
allIsi.style.transform  = "translateX(-200%)";
proIsi.style.transform  = "translateX(-200%)";
finIsi.style.transform  = "translateX(0)";
allBtn.classList.remove('active');
proBtn.classList.remove('active');
finBtn.classList.add('active');
} */

// sistem tambah aktivitas
const userInputAsli = document.querySelector(".input-do");
const body = document.querySelector('body');
const container = document.querySelector('.container');
const conList = document.querySelector('.isi-list-user');
const btnAdd = document.querySelector('.btn-add');
const judul = document.querySelector('.header');
const allText = document.getElementById('all');
let divListBaru;
userInputAsli.addEventListener('keydown', function (e) {
  if (e.key === "Enter") {

    if (userInputAsli.value === "removeAll") {
      const listAllToDelete = document.querySelectorAll('.list');
      const userDoCek = document.querySelector('.user-do');
      listAllToDelete.forEach(listItem => {
        listItem.remove();
      });
      userInputAsli.value = ""; const listInAllIsi = allIsi.querySelectorAll(".list");
      const divNotHave = document.createElement("div");
      divNotHave.innerHTML =
        "<p class='text-no-list-header'>You not have a task!</p><p class='text-no-list-sub'>go create the task</p>";
      divNotHave.classList.add("containerText");
      if (listInAllIsi.length === 0) {
        allIsi.appendChild(divNotHave);
      } else if (listInAllIsi.length > 0) {
        allIsi.removeChild(divNotHave);
      }

      var inputValue = allIsi.innerHTML;
      localStorage.setItem('valueList', inputValue);
    } else if (userInputAsli.value === "lightMode") {
    const lightModeColors = {
        body: "#f1eaff",
        container: "#c9a2f8",
        conList: "#e5d4ff",
        btnAdd: "#7743db",
        judul: "black"
    };
    // Set warna untuk light mode
    body.style.background = lightModeColors.body;
    container.style.background = lightModeColors.container;
    conList.style.background = lightModeColors.conList;
    btnAdd.style.background = lightModeColors.btnAdd;
    judul.style.color = lightModeColors.judul;
      userInputAsli.value = "";
    localStorage.removeItem('colorMode', JSON.stringify(darkModeColors));
    } else if (userInputAsli.value === "darkMode") {
    const darkModeColors = {
        body: "#483a66",
        container: "#8153ba",
        conList: "#ab86e5",
        btnAdd: "#915df4",
        judul: "white"
    };
    // Set warna untuk light mode
    body.style.background = darkModeColors.body;
    container.style.background = darkModeColors.container;
    conList.style.background = darkModeColors.conList;
    btnAdd.style.background = darkModeColors.btnAdd;
    judul.style.color = darkModeColors.judul;
    localStorage.setItem('colorMode', JSON.stringify(darkModeColors));
      userInputAsli.value = "";
    } else {
      addList();
    }
    /*  container#dcbfff
      inpDowhite
      btnAdd#7743db
      isiListUser#e5d4ff
      list#dcbfff
      confirmWhite */
    
  }

  var inputValue = allIsi.innerHTML;
  localStorage.setItem('valueList', inputValue);
});
const blurBgKosong = document.querySelector('.blurBgKosong');
function addList() {
  const userInput = userInputAsli.value;
  // sitem ada tanggal deskripsi 
  function padWithZero(number) {
  return number < 10 ? '0' + number : number;
}
  var tanggalList = new Date();
  var listTahun = padWithZero(tanggalList.getFullYear());
  var listBulan = padWithZero(tanggalList.getMonth() + 1);
  var listHari = padWithZero(tanggalList.getDate());
  var listJam = padWithZero(tanggalList.getHours());
  var listMenit = padWithZero(tanggalList.getMinutes());
  var listDetik = padWithZero(tanggalList.getSeconds(+1));

  if (!userInput.trim()) {
    blurBgKosong.style.display = "flex";
    return;
  }

  if (userInput === "removeAll") {
    // Hapus semua elemen
    const listAllToDelete = document.querySelectorAll('.list');
    listAllToDelete.forEach(listItem => {
      listItem.remove();
    });
    userInputAsli.value = "";
    const listInAllIsi = allIsi.querySelectorAll(".list");
    const divNotHave = document.createElement("div");
    divNotHave.innerHTML =
      "<p class='text-no-list-header'>You not have a task!</p><p class='text-no-list-sub'>go create the task</p>";
    divNotHave.classList.add("containerText");
    if (listInAllIsi.length === 0) {
      allIsi.appendChild(divNotHave);
    } else if (listInAllIsi.length > 0) {
      allIsi.removeChild(divNotHave);
    }
    return; // Keluar dari fungsi jika userInputAsli.value adalah "removeAll"
  }
  const getConText = document.querySelector(".containerText");
  if (getConText) {
    getConText.remove();
  }
  if (userInputAsli.value === "removeAll") {
    const listAllToDelete = document.querySelectorAll('.list');
    const userDoCek = document.querySelector('.user-do');
    listAllToDelete.forEach(listItem => {
      listItem.remove();
      var inputValue = allIsi.innerHTML;
      localStorage.setItem('valueList', inputValue);
    });

  }

  const divListBaru = document.createElement("div");
  divListBaru.innerHTML =
    '<img src="cekOff.png" class="check-act" /> <p class="user-do">' +
    userInput + '<br><label class="list-tanggal">' + listTahun + '/' + listBulan + '/' + listHari + ' ' + listJam + ':' + listMenit + ':' + listDetik + '</label></p><img src="close.png" class="close-img" alt="close" onclick="deleteList()"/>';
  divListBaru.classList.add("list");
  
  allIsi.appendChild(divListBaru.cloneNode(true));
  /*      proIsi.appendChild(divListBaru);*/
  userInputAsli.value = "";

  const cekActGbrs = document.querySelectorAll(".check-act");
  var click = false;
  cekActGbrs.forEach(cekActGbr => {
    cekActGbr.addEventListener("click", () => {
      if (!cekActGbr.disabled) {
        cekActGbr.src = "loading.png";
        cekActGbr.style.animation = "load 2s ease";

        cekActGbr.disabled = true;
        setTimeout(function () {
          /*      const parentList = cekActGbr.closest('.list');
const userDo = parentList.querySelector('.user-do').innerHTML;
const divListFinish = document.createElement("div");
divListFinish.innerHTML = '<img src="cekOn.png" class="check-act" /> <p class="user-do">' + userDo + '</p><img src="close.png" class="close-img" alt="close" onclick="deleteList()"/>';
divListFinish.classList.add('list');
finIsi.appendChild(divListFinish); */
          cekActGbr.src = "cekOn.png";
          var inputValue = allIsi.innerHTML;
          localStorage.setItem('valueList', inputValue);
        }, 2050);
      }
    });
  });
  var inputValue = allIsi.innerHTML;
  localStorage.setItem('valueList', inputValue);
}

// sistem cekAct

/* const cekActGbrs = document.querySelectorAll(".check-act");
var click = false;
cekActGbrs.forEach(cekActGbr => {
  cekActGbr.addEventListener("click", () => {
    if (!cekActGbr.disabled) {
      cekActGbr.src = "loading.png";
      cekActGbr.style.animation = "load 2s ease";
      cekActGbr.disabled = true;
      setTimeout(function () {
           const parentList = cekActGbr.closest('.list');
const userDo = parentList.querySelector('.user-do').innerHTML;
const divListFinish = document.createElement("div");
divListFinish.innerHTML = '<img src="cekOn.png" class="check-act" /> <p class="user-do">' + userDo + '</p><img src="close.png" class="close-img" alt="close" onclick="deleteList()"/>';
divListFinish.classList.add('list');
finIsi.appendChild(divListFinish); 
        cekActGbr.src = "cekOn.png";
      }, 2050);
    }
  });
}); */
let currentListToDelete;
const divConfirm = document.querySelector(".blurBg");

function deleteList() {
  currentListToDelete = event.target.closest(".list");
  divConfirm.style.display = "flex";
}

function confirmNo() {
  divConfirm.style.display = "none";
}
function confirmYes() {
  if (currentListToDelete) {
    currentListToDelete.remove();
    divConfirm.style.display = "none";
    var inputValue = allIsi.innerHTML;
    localStorage.setItem('valueList', inputValue);
  }
  const listInAllIsi = allIsi.querySelectorAll(".list");
  const divNotHave = document.createElement("div");
  divNotHave.innerHTML =
    "<p class='text-no-list-header'>You not have a task!</p><p class='text-no-list-sub'>go create the task</p>";
  divNotHave.classList.add("containerText");
  if (listInAllIsi.length === 0) {
    allIsi.appendChild(divNotHave);
  } else if (listInAllIsi.length > 0) {
    allIsi.removeChild(divNotHave);
  }
  var inputValue = allIsi.innerHTML;
  localStorage.setItem('valueList', inputValue);
}
function confirmOke() {
  userInputAsli.style.border = "2px solid red";
  blurBgKosong.style.display = "none";
}
userInputAsli.onclick = function () {
  userInputAsli.style.border = "none";
};