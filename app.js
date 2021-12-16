// TOGGLE FUNCTIONALITY
const toggle = document.querySelector('.toggle');
const toggleCircleBtn = document.querySelector('.toggle-circle');
const billShow = document.querySelector(".bill-show");
const billType = document.querySelector(".bill-type");
const slider = document.getElementById("slider");
// const toggle = document.querySelector(".toggle");

billShow.innerText = `$${slider.value}.00`
function toggleCircle() {
    toggle.classList.toggle("move-circle");

    // CALCULATE BILLING
    if (toggle.classList.contains('move-circle')) {
        billType.innerText = `/Yearly`;
        billShow.innerText = `$${slider.value * 12 * 0.25}.00 `;
        toggle.style.backgroundColor = "hsl(174, 86%, 45%)"

    } else {
        billType.innerText = `/Monthly`;
        billShow.innerText = `$${slider.value}.00`;
        toggle.style.backgroundColor = "hsl(223, 50%, 87%)"
    }
}

toggleCircleBtn.addEventListener("click", toggleCircle);



const selector = document.querySelector(".selector");
function moverFunction() {
    selector.style.left = `${this.value}%`;
    billShow.innerText = `$${this.value}.00`
}
slider.oninput = moverFunction
slider.onmousemove = moverFunction