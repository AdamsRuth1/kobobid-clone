let thick = document.getElementById("myCheckbox")
let displayedText = document.getElementById("code")
let referralText = document.getElementById("referralCheckbox")
let specilaCode = document.getElementById("referralcheck")
let referral = document.getElementById("ref-code")

function display() {
    displayedText.style.display = specilaCode.checked ? "block" : "none";
}


function referralCode() {
    referral.style.display = referralText.checked ? "block" : "none";
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-nav');
    const hamburger = document.getElementById('hamburger');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'flex' : 'none';
}
