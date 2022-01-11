let input = document.getElementById('input');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');

let name_error = document.querySelector('#name_error');
let email_error = document.querySelector('#email_error');
let password_error = document.querySelector('#password_error');
let confirm_password_error = document.querySelector('#confirm_password_error');

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


let btn = document.getElementById('submit');

const validation = (event) => {
    event.preventDefault();


    if(input.value == ''){
        name_error.textContent=" Invalid UserName";
        name_error.style.visibility="visible";
        input.classList.remove('input_green');
       input.classList.add('input_red');
    }else if( input.value.length < 10){
        name_error.textContent=" Name must be atleast 10 character long";
        name_error.style.visibility="visible";
        input.classList.remove('input_green');
       input.classList.add('input_red');
    }
    else{
        
        name_error.textContent = "";
        name_error.style.visibility="hidden";
        input.classList.add('input_green');
    }


    if(email.value == ''){
        email_error.textContent=" Invalid Email";
        email_error.style.visibility="visible";
        email.classList.remove('input_green');
       email.classList.add('input_red');
    }else if( email.value.match(mailformat)){
        
        email_error.style.visibility="hidden";
        email.classList.add('input_green');
    }
    else{
        email.classList.remove('input_green');
        email_error.textContent="Invalid Email Format";
        email_error.style.visibility="visible";
        email.classList.add('input_red');
    }


    if(password.value == ''){
        password_error.textContent=" Invalid Password";
        password_error.style.visibility="visible";
        password.classList.remove('input_green');
       password.classList.add('input_red');
    }else if(password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)){
        
        password_error.style.visibility = 'hidden';
        password.classList.add('input_green');
    }
    else{
        password.classList.remove('input_green');
        password_error.textContent=" Password must be atleast 10 character long contains aleast one uppercase,one lowercase,one number & one special character";
        password_error.style.visibility="visible";
       password.classList.add('input_red');
    }


    if(confirm_password.value == ''){
        confirm_password_error.textContent=" Invalid Password";
        confirm_password_error.style.visibility="visible";
        confirm_password.classList.remove('input_green');
       confirm_password.classList.add('input_red');
     }else if( !confirm_password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)){  
        confirm_password_error.textContent=" Must be valid as above password";
        confirm_password_error.style.visibility="visible";
        confirm_password.classList.remove('input_green');
       confirm_password.classList.add('input_red');
    }
    else{
        
        confirm_password_error.style.visibility="hidden";
        confirm_password.classList.add('input_green');
    }


    if( input.value.length >= 10 &&  email.value.match(mailformat) && (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)) && confirm_password.value == password.value){
        console.log(`Name = ${input.value}`);
        console.log(`Email = ${email.value}`);
        console.log(`Password = ${password.value}`);
        console.log(`Confirm Password = ${confirm_password.value}`);
         }
}





btn.addEventListener('click',validation);
