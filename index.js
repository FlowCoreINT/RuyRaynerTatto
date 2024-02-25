const imgs = document.querySelectorAll("#imagens img");
const INTERVAL_TIMING =3000

let index = 0;
function carrossel() {
  index++

  if (index > imgs.length - 1) {
    index = 0

    for (const img of imgs) {
      img.style.right = "-100%"
    }
  }

  imgs[index].classList.add("active")

  if ((index - 1) < 0) {
    imgs[imgs.length - 1].style.right = "100%"
    imgs[imgs.length - 1].classList.remove("active")
  } else {
    imgs[index - 1].style.right = "100%"
    imgs[index - 1].classList.remove("active")
  }
}

setInterval(carrossel, INTERVAL_TIMING)
