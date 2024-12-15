function creatCard(title, cname, views, monthsOld, duration, thumbnail) {
    //Finish this function
    let viewnumber
    if (views < 1000) {
        viewnumber = views / 1000 + "K";
    }
    else if (views > 1000) {
        viewnumber = views / 1000 + "M";
    }
    else {

        viewnumber = views / 1000 + "K";

    }
    let html = `  <div class="container">
        <div class="card">
            <div class="img">
            <img src=${thumbnail} alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname}.${viewnumber}views.${monthsOld} months ago</p>

            </div>

        </div>

    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


creatCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")