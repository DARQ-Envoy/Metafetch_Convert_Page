const profile = document.querySelector("#profile");
const profileSet = document.querySelector("#pro-settings");
const headLogo = document.querySelector("#head-logo");
const headOpt = document.querySelector("#options-1");
const addPar = document.querySelector("#add-par")
const spans = headOpt.querySelectorAll("span");
const spanarr = Array.from(spans);
const userSettings = document.querySelector("#user-settings");
const convBtn = document.querySelector("#conv-btn");
const convertingModal=  document.querySelector(".converting")


let collapsed = false;

profile.addEventListener("click",()=>{
    if(!collapsed){
        profileSet.classList.remove("d-none");
        collapsed= true;
    }
    else{
        profileSet.classList.add("d-none");
        collapsed = false;
    }
 
})

convBtn.addEventListener("click",()=>{
convertingModal.classList.remove("d-none")
})
const mobile = window.matchMedia( '(max-width: 1100px)' );
if(mobile.matches){
    mobileView()
            }
mobile.addEventListener("change", ()=>{

    if(mobile.matches){
    mobileView()
    }
    else{
        desktopView()
        
            }
})

function mobileView(){
    headLogo.src='images/Brand Icon mini.svg';
    // Head Opt
    headOpt.innerHTML=`
<a type="button" data-bs-toggle="offcanvas" href="#nav-options" aria-controls="navoptions">
<img src="images/hamburger.svg" alt="Menu Icon" class="menu-icon"/>
</a>


    <div class="offcanvas offcanvas-start  sidebar" tabindex="-1" id="nav-options">
 
    <div class="offcanvas-body off-body">
    <div class="app-opt d-flex flex-column align-items-start">
        <span>
            <a href="#">Convert File</a>
        </span>

        <span>
            <a href="#">Saved Data</a>
        </span>
    </div>
   
    </div>
  </div>
    `
addPar.textContent="Click here to upload a file."
convBtn.textContent ="Convert File"

}



function desktopView(){
    headLogo.src='images/MetaFetch Icon.svg';
    headOpt.innerHTML= `
    <span>
    <a href="#">Convert File</a>
</span>

<span>
    <a href="#">Saved Data</a>
</span>
    `

addPar.textContent="Click here to upload a file. You can also drag & drop it here."
convBtn.textContent ="Convert"
}
