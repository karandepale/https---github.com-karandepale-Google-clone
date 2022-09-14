const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keydown" , function(e){
    if(e.code === "Enter" ){
        search();
    }
})


function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=ALiCzsZpW_eB7mJSPSp5HXRBKHG6-j2S6Q%3A1663156895657&source=hp&ei=n8IhY9LTJZemoASa6bPQBA&iflsig=AJiK0e8AAAAAYyHQrwbTl1O6nKa4nuixBSNHmy_L7ao1&ved=0ahUKEwiSn-CfnpT6AhUXE4gKHZr0DEoQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDENQCMggIABCABBCxAzIICC4QgAQQsQMyCwguEIAEELEDENQCMgsILhCABBCxAxCDATILCAAQgAQQsQMQgwEyCwguEIAEELEDENQCMggILhCABBDUAjILCAAQgAQQsQMQgwEyCAgAEIAEELEDOgcIIxDqAhAnOg0ILhDHARCvARDqAhAnOgQIIxAnOgoILhDHARDRAxAnOggIABCxAxCDAToOCC4QgAQQsQMQgwEQ1AI6BQgAEIAEOhQILhCABBCxAxCDARDHARDRAxDUAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CAguELEDENQCOgsIABCABBCxAxDJAzoICAAQkgMQiwM6CAgAEIAEEIsDUOIDWN8JYNcPaAFwAHgAgAGmA4gBgAuSAQkwLjEuMi4xLjGYAQCgAQGwAQq4AQI&sclient=gws-wiz";

}