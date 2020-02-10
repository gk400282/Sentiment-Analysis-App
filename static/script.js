const it = document.getElementById("main-input");
const mf = document.getElementById("main-form");
const sb = document.getElementById("submit-button");
const rd = document.getElementById("result-display");
const cover = document.querySelector(".cover");

it.addEventListener("input", changeValue);
sb.addEventListener("click", function(e){
    let textContent = it.value;
    let textString = textContent.toString();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/SIH/"); 
    xhr.onload = function(event){ 
        const count = JSON.parse(event.target.response).compound;
        console.log(JSON.parse(event.target.response)); // raw response
        if(count > 0.05){
            rd.innerText = "Positive";
            cover.classList.remove("red");
            cover.classList.add("green");
        }
        else if(count < -0.05){
            rd.innerText = "Negative";
            cover.classList.remove("green");
            cover.classList.add("red");
        }
        else{
            rd.innerText = "Neutral";
            cover.classList.remove("red");
            cover.classList.remove("green");
        }
    }; 
    // or onerror, onabort
    var formData = new FormData(mf); 
    xhr.send(formData);
});

function changeValue(e){
    let textContent = e.target.value;
    let textString = textContent.toString();
    if(textString == ""){
        rd.innerText = "";
        cover.classList.remove("red");
        cover.classList.remove("green");
    }
}