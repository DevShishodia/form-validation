
let input = document.getElementById('input');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');

let btn = document.getElementById('submit');

const passwordFormat  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$/ ;




if(input.length > 1){
    checkName();
      }
      if(email.length > 1){
        checkEmail();
      }
      if(password.length > 1){
        checkPassword();
      }
      if(confirm_password.length > 1){
        checkConfirmPassword();
        clicked();
      }

const checkName = () =>{
     
    if(input.value.length >= 10){
        input.classList.add('input_green');
        
    }else{
       input.classList.add('input_red');
    }
};

const checkEmail = () =>{
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email.value.match(mailformat)){
        email.classList.add('input_green') ;
     }else{
        email.classList.add('input_red') ;
    }
};


const checkPassword = () =>{
    
        if(password.value.match(passwordFormat) && password.length > 10){
            password.classList.add('input_green');   
            
        }else{
            password.classList.add('input_red');  
        }
   
};


const checkConfirmPassword = () =>{
    if(confirm_password.value.match(passwordFormat) && confirm_password.length > 10 && confirm_password == password){
        confirm_password.classList.add('input_green');   
        
    }else{
        confirm_password.classList.add('input_red');   
    }
};

    btn.disabled = false;
btn.addEventListener('click', function(event) {
    event.preventDefault();
     
   
        console.log(input.value);
        console.log(email.value);
        console.log(password.value);
        console.log(confirm_password.value);      
});

