document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});


document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = "972509583366"; // מספר טלפון עם קידומת בינלאומית
    var message = "אוראל! אשמח לשמוע עוד פרטים❤️"; 
    var whatsappUrl = "https://wa.me/" + 509583366 + "?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
});
