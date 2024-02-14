var outsideClick = function(e){
    var container = document.querySelector(".custoDrp");
    if(!container.contains(e.target)&& !container.classList.contains("active")){
        container.classList.remove("active");
        document.removeEventListener("click", outsideClick);
    }
};

//document.addEventListener("click",outsideClick);

document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll(".customDropDown").forEach(function(element){
        element.addEventListener("click",function(e){
            if (e.target.classList.contains("cross") || e.target.classList.contains("string")|| e.target.classList.contains("browiro")){
                return false;
            }
            if (e.target.tagName === "A"){
                return true ;
            }
            e.preventDefault();

      console.log(e.target);
        });
        if (e.target.classList.contains("language")||e.target.parentElement.classList.contains("language")){
            languageFunc();
        }
        if (window.matchMedia('(max-width:1270px)').matches){
            document.body.style.overflow ='hidden';

        }
       if (e.target.classList.contains("searchCoinDrp")){
        document.getElementById('tokensearch1').focus();
       }
       if(this.nextElementSibling && this.nextElementSibling.classList.contains("customDrp")){
        this.nextElementSibling.classList.add("active");
       }else{
        this.querySelector(".customDrp").classList.add("active");
       }
       e.stopPropagtion();
       document.addEventListener("click",outsideClick);

       let basic_banner_read_btn = false;
document.querySelector("basic_banner_read_btn").addEventListener("click",function(){
    if (!basic_banner_read_btn){
        this.textContent = "read less";
        document.querySelector(".basic_banner_read_btn").classList.toggle("slideToggle");
        basic_banner_read_btn = true;
    }
    else{
        document.querySelector(".basic_banner_read_btn").classList.toggle("slideToggle");
        this.textContent = "read more";
        basic_banner_read_btn = false;
    }
});

document.querySelector(".filterToggelBtn").addEventListener("click",function(){

    document.querySelector(".filetertoggle").classList.toggle("active");
});

document.querySelector(".hideCustomDrp").addEventListener("click", function () {
    document.querySelector(".customDrp").remove("active");
 });

 document.querySelector(".closeIcon").addEventListener("click",function () {
    document.querySelector(".customPopup").remove("active");
    document.querySelector(".commonPopup").remove("active");

    if (!document.querySelector(".headerMain").classList.contains("active")) {
       document.body.style.overflow = 'auto';
    }
 });

 document.querySelector("mainTable").addEventListener("scroll", function(e){
    let isscroll = e.currentTarget.scrollLeft;
    if(isscroll){
        document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)").forEach(function(element){
            element.classList.add("before");
        });
    }else{
        document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)").forEach(function(element){
            element.classList.remove("before");
        });
    }
 });
 
    });
});





