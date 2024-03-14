document.addEventListener("DOMContentLoaded", cekStorage);

function cekStorage() {
  const allIsi = document.querySelector(".list-user-all");
  var storedValueList = localStorage.getItem('valueList');
  var storedColorMode = localStorage.getItem('colorMode');
  // Pengecekan apakah nilai yang didapatkan dari localStorage bukan null
  if (storedValueList !== null) {
    allIsi.innerHTML = storedValueList;
  } else {
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

if (storedColorMode) {
    const colorMode = JSON.parse(storedColorMode);
    body.style.background = colorMode.body;
    container.style.background = colorMode.container;
    conList.style.background = colorMode.conList;
    btnAdd.style.background = colorMode.btnAdd;
    judul.style.color = colorMode.judul;
}

}
