const CookiesDiv = document.getElementById("alertthing");
const AlertDiv = document.getElementById("errorDiv")

function closeCookies() {
    CookiesDiv.style.display = "none"
}

function showAlert() {
    AlertDiv.style.display = "grid"
}

function closeAlert() {
    AlertDiv.style.display = "none"
}