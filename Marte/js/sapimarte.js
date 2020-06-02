// $(document).ready(function () {
//     alert("hola");
// });
/*###############   FUNCIONAMIENTO DEL ICONO  ################*/

// $("#btn-menu").click(function() {
//     $(".menu-vertical").css("display","block");
//     $(".menu-horizontal").css("left","240px");
//     $("body").css("margin-left","240px");
// });





/*#################     CARGAR PAMATRO   ####################*/
const realFileBtn = document.getElementById("inpFile");
const customBtn = document.getElementById("custom-button");
const customText = document.getElementById("custom-text");
customBtn.addEventListener("click", function () {
    realFileBtn.click();
});
realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        customText.innerHTML = "no file chose";
    }
});

/*################     CARGAR IMAGEN    #####################*/
const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

inpFile.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

        reader.addEventListener("load", function () {
            previewImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    } else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");
    }
});

