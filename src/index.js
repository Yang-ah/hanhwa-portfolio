// tablet
const btn = document.querySelector("#subGnbBtn");
const btnI = document.querySelector("#subGnbBtn~label");
const subGnb = document.querySelector(".subGnb");

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
