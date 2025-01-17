let checkBtn= document.getElementById("check-btn");
let clearBtn= document.getElementById('clear-btn');
// console.log(btn);
let input= document.getElementById('user-input')
// console.log(input);
let result= document.getElementById('results-div')
let output= document.getElementById('output')
// console.log(result)


// const usPhoneNumberRegex = /^(1-?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}[-.\s]?\d{4}$/;
const usPhoneNumberRegex = /^(1[-\s]?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;


checkBtn.onclick= () =>{
    
    let phoneNumber = input.value.trim();

    if(input.value=="")
    {
        // console.log("Please enter a valid number")
        result.textContent="Please enter a valid number"
        // alert("Please provide a phone number");
        return;
    } 

    if (usPhoneNumberRegex.test(phoneNumber)) {
        result.textContent = "Valid US number: "+input.value;
    } else {
        result.textContent = "Invalid US number:"+input.value;
    }
};

clearBtn.onclick= ()=>{
    result.textContent="";
    // input.value="";
};
