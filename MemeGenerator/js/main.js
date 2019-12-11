function init(){
    loadData();
    renderGallery();
}
function renderGallery(){
    var elGallery = document.querySelector(".gallery");
    var imgs = getImagesToRender();
    // var elAlertSpan =  document.querySelector(".alertSpan");
    // if (todos.length === 0) {
    //     var filter = document.querySelector("#status-filter").value;
    //     elAlertSpan.innerHTML = `no ${filter} todos to show`;
    // } 
    // else{
    //     elAlertSpan.innerHTML = ``;
    // }
    var strImgs = imgs.map(function(item) {
        return `<img src="${item.path}" class = "galleryImage">`;
    });
    elGallery.innerHTML = strImgs.join("");
}