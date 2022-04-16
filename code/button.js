var menu_button = document.querySelector("#menu")
var menu = document.querySelector("#wrapper-menu")

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

menu_button.addEventListener ("click", async function (e) {

    let button_active = menu_button.classList.contains("active")
    
    // Active button and show menu
    if (! button_active) {
        menu_button.classList.add ("active")
        menu.classList.add ("middle-collapsed")
        await sleep (0.5)
        menu.classList.remove ("middle-collapsed")
        menu.classList.remove ("collapsed")
    
    // Deactivate button and collapse menu
    } else {
        menu_button.classList.remove ("active")
        menu.classList.add ("middle-collapsed")
        await sleep (0.5)
        menu.classList.remove ("middle-collapsed")
        menu.classList.add ("collapsed")
        
    }

})