let modal = document.querySelector(".modal");
let closebtn = document.querySelector(".fa-times");
let modalImg = document.querySelectorAll(".modal-image")
let modalContentImage = document.querySelector(".modal-content-image")
let modalContainer = document.querySelector(".scale-container")
let btns = document.querySelectorAll(".btn");
let storeItems =[...document.querySelectorAll(".store-items")]
let search = document.querySelector("#search")
let errowTest = document.querySelector(".err")
let close = document.querySelector(".hamburger i")
let nav = document.querySelector(".nav-wrapper")


close.addEventListener("click", function(){
    if(close.classList.contains("fa-bars")){
        nav.style.height = "200px";
        close.classList.add("fa-times");
        close.classList.remove("fa-bars");
    }else{
        nav.style.height = "0";
        close.classList.add("fa-bars");
        close.classList.remove("fa-times");
    }
})




closebtn.addEventListener("click", function(){
    modal.style.display = "none";
});


for (let i = 0; i < modalImg.length; i++){
modalImg[i].addEventListener("click", function(e){
    
    let currentModalImage = e.target.src;
    modalContentImage.src = currentModalImage;
    modal.style.display = "flex";
    
})

}

btns.forEach(function (button) {
    button.addEventListener("click", function(e){
        e.preventDefault();
        let category = e.target.dataset.filter;
        storeItems.forEach(function(item){
            if (category == "all"){
                item.style.display = "block";
            } else{
                if(item.classList.contains(category)){
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        })
    })
})

search.addEventListener("keyup", (e)=>{
    let search1 = e.target.value.toLowerCase().trim();
    storeItems.forEach(function(itemss){
        if(itemss.textContent.includes(search1)){
            itemss.style.display = "block";
            } else{
                itemss.style.display = "none";
            }

            // // no item found
            let noItemfound = storeItems.every(function(itemss){
                if(itemss.style.display == "none"){
                    return true;} else return false;
                
            });

            if (noItemfound){
                errowTest.style.display = "block";
                errowTest.textContent = `No ${search1} found`;
            } else {errowTest.style.display = "none"}
            // // no item end
    })
})