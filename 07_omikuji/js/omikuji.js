"use strict"

window.addEventListener("DOMContentLoaded",
    function () {
        let popmessage = "いらっしゃい。おみくじ引いて!";
        this.window.alert(popmessage);
    }, false
);

//おみくじボタン
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function () {
        let n = Math.floor(Math.random() * 3);

        switch (n) {
            case 0:
                btn1.textContent = "Very Happy!!";
                btn1.style.color = "#ff0000";
                btn1.style.fontSize = "32px";
                break;
            case 1:
                btn1.textContent = "Happy!!";
                btn1.style.color = "#fff001";
                btn1.style.fontSize = "24px";
                break;
            case 2:
                btn1.textContent = "Un Happy!!";
                btn1.style.color = "#261e1c";
                btn1.style.fontSize = "16px";
                break;
        }
    }, false
);