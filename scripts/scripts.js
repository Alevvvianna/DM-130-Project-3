// Menu mobile
function menuToggle() {
    const navLinks = document.getElementById("nav-links");
    if(navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

// FAQ toggle
function toggleAnswer(id) {
    const ans = document.getElementById(id);
    if(ans.style.display === "block") {
        ans.style.display = "none";
    } else {
        ans.style.display = "block";
    }
}