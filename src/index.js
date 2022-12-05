// tablet
const btn = document.querySelector("#subGnbBtn");
const btnI = document.querySelector("#subGnbBtn~label");
const subGnb = document.querySelector(".subGnb");
const Xbtn = document.querySelector(".subGnb-Xbtn");
const showListBtn = document.querySelectorAll(".showListBtn");
const showListBtnI = document.querySelectorAll(".showListBtn i");
const subList = document.querySelectorAll(".subList");
const subGnbnav = document.querySelectorAll(".subGnb-nav");
const subLogo = document.querySelector(".subLogo");
const upIcon = "fas fa-chevron-up";
const downIcon = "fas fa-chevron-down";

const removeSub = () => {
  subGnb.classList.add("hidden");
  onHidden();
};

function listToggle(hl) {
  let dataList = hl.target.dataset.list;

  subList.forEach((subList) => {
    if (
      subList.dataset.list == dataList &&
      subList.classList.contains("hidden")
    ) {
      subList.classList.remove("hidden");
      changeI(dataList, "up");
    } else if (
      subList.dataset.list == dataList &&
      !subList.classList.contains("hidden")
    ) {
      subList.classList.add("hidden");
      changeI(dataList, "down");
    }
  });
}

const changeI = (dataList, status) => {
  showListBtnI.forEach((icon) => {
    if (icon.dataset.list == dataList && status == "up") {
      icon.classList.value = upIcon;
    } else if (icon.dataset.list == dataList && status == "down") {
      icon.classList.value = downIcon;
    }
  });
};

const onClick = () => {
  btn.classList.toggle("hidden");
  btnChk();
  subGnb.classList.remove("hidden");
};

const onHidden = () => {
  if (window.innerWidth > 1023) {
    btn.classList.add("hidden");
    subGnb.classList.add("hidden");
  } else {
    btn.classList.remove("hidden");
  }
  btnChk();
};

/* btn class chk (hidden) */
const btnChk = () => {
  btn.classList.contains("hidden")
    ? btnI.classList.add("hidden")
    : btnI.classList.remove("hidden");
};

window.onload = onHidden();
btn.addEventListener("click", onClick);
window.addEventListener("resize", onHidden);
Xbtn.addEventListener("click", removeSub);
subLogo.addEventListener("click", removeSub);

subGnbnav.forEach((nav) => {
  nav.addEventListener("click", listToggle);
});
