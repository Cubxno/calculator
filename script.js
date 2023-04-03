let display = document.querySelector(".display")
let numContainer = document.querySelector(".numbers-container")
let sumContainer = document.querySelector(".sum-container")
let sum = 0
let choice = "none"

numContainer.addEventListener("click", addNum )
sumContainer.addEventListener("click", action)

function addNum(e){
    if(e.target.id == "1"){
        display.innerText = display.innerText + "1"
    }else if (e.target.id == "2"){
        display.innerText = display.innerText + "2"
    }else if (e.target.id == "3"){
        display.innerText = display.innerText + "3"
    }else if (e.target.id == "4"){
        display.innerText = display.innerText + "4"
    }else if (e.target.id == "5"){
        display.innerText = display.innerText + "5"
    }else if (e.target.id == "6"){
        display.innerText = display.innerText + "6"
    }else if (e.target.id == "7"){
        display.innerText = display.innerText + "7"
    }else if (e.target.id == "8"){
        display.innerText = display.innerText + "8"
    }else if (e.target.id == "9"){
        display.innerText = display.innerText + "9"
    }else if (e.target.id == "0"){
        if (display.innerText == ""){
            display.innerText = ""
        }else { display.innerText = display.innerText + "0"}
       
    }else if (e.target.id == "ac"){
        sum = 0
        choice = "none"
        display.innerText = ""
    }
}

function action(e){
    if(e.target.id == "+"){
        sum = parseInt(display.innerText)
        display.innerText = ""
        choice = "sum"
    }else if (e.target.id == "="){
        if(choice == "sum"){
            sum += parseInt(display.innerText)
        display.innerText = sum
        }else if (choice == "sub"){
            sum -= parseInt(display.innerText)
            display.innerText = sum
        }else if (choice == "div"){
            sum = sum / parseInt(display.innerText)
            display.innerText = sum
        }else if (choice == "mul"){
            sum *= parseInt(display.innerText)
            display.innerText = sum
        }
    }else if (e.target.id == "-"){
        sum = parseInt(display.innerText)
        display.innerText = ""
        choice = "sub"
    }else if (e.target.id == "%"){
        sum = parseInt(display.innerText)
        display.innerText = ""
        choice = "div"
    }else if (e.target.id == "x"){
        sum = parseInt(display.innerText)
        display.innerText = ""
        choice = "mul"
    }
}