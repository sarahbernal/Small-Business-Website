document.getElementById("ctaButton").addEventListener("click",function() {
    const newText = document.getElementById("myText").value;
    document.getElementById("cta").textContent = newText;
});