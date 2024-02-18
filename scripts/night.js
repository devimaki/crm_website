function is_dark_theme(){
    let values = decodeURIComponent(document.cookie).split(";");
    for (let i = 0; i < values.length; i++){
        let duo = values[i].split("=");
        if ((duo[0] == "theme") && (duo[1] == "dark")){
            return true;
        }
    }
    return false;
}

function set_theme(theme){
    console.log("changement du thème");
    let theme_icon = document.getElementById("theme-icon").classList;
    let navbar = document.getElementById("navbar").classList;

    document.documentElement.setAttribute("data-bs-theme", theme);
    document.cookie = "theme=" + theme;
    if (theme == "dark"){
        navbar.remove("bg-white");
        navbar.add("bg-dark");

        theme_icon.remove("bi-sun");
        theme_icon.add("bi-moon");
    }
    else{
        navbar.remove("bg-dark");
        navbar.add("bg-white");

        theme_icon.remove("bi-moon");
        theme_icon.add("bi-sun");
    }
}

function switch_theme(){
    if (is_dark_theme()){
        set_theme("light");
    }
    else{
        set_theme("dark");
    }
}

if (is_dark_theme()){
    set_theme("dark");
}
else{
    set_theme("light");
}

document.getElementById("theme-btn").addEventListener("click", switch_theme)