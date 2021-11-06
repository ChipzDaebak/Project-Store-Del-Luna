let form = document.querySelector('#form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        let confPass = document.querySelector('#confirm-password').value;
        let fullname = document.querySelector('#full-name').value;
        let gender = document.getElementsByName('gender');
        let email = document.querySelector('#email').value;
        let age = document.querySelector('#age').value;
        let cekbox = document.querySelector('#check');

        let errorUsername = document.querySelector('#error-username');
        let errorPass = document.querySelector('#error-pass');
        let errorConfPass = document.querySelector('#error-confirmPass');
        let errorFullname = document.querySelector('#error-fullname');
        let errorGender = document.querySelector('#error-gender');
        let errorEmail = document.querySelector('#error-email');
        let errorAge = document.querySelector('#error-age');
        let errorCekbox = document.querySelector('#error-cekbox');
        
        errorUsername.innerHTML="";
        errorPass.innerHTML="";
        errorConfPass.innerHTML="";
        errorFullname.innerHTML="";
        errorGender.innerHTML="";
        errorEmail.innerHTML="";
        errorAge.innerHTML="";
        errorCekbox.innerHTML="";

        let flag = 0;
        if(isEmpty(username)){
            errorUsername.innerHTML = '*Username cannot be empty';
            flag=1;
        }
        if(isEmpty(password)){
            errorPass.innerHTML = '*Password cannot be empty';
            flag=1;
        }
        if(isEmpty(confPass)){
            errorConfPass.innerHTML = '*Confirmation Password cannot be empty';
            flag=1;
        }else if(samePass(confPass, password)){
            errorConfPass.innerHTML = '*Confirmation password is not the same as the given Password';
            flag=1;
        }
        if(isEmpty(fullname)){
            errorFullname.innerHTML = '*Full Name cannot be empty';
            flag=1;
        }
        if(!isChecked(gender)){
            errorGender.innerHTML = '*Gender must be selected';
            flag=1;
        }
        if(!isEmailValid(email)){
            errorEmail.innerHTML = '*Invalid Email';
            flag=1;
        }
        if(isEmpty(age)){
            errorAge.innerHTML = '*Age cannot be empty';
            flag=1;
        }else if(isNumber(age)){
            errorAge.innerHTML = '*Age must be numeric';
            flag=1;
        }
        if(!cekbox.checked){
            errorCekbox.innerHTML = '*Must agree with the terms and conditions';
            flag=1;
        }
        if(flag==0){
            location.assign('home.html');
            alert('Register Successful!!');
        }
    })

    function isEmpty(str){
        return str === "";
    }

    function isEmailValid(email){
        if(email.split('@').length !== 2){
            return false;
        }
    
        if(!email.endsWith('.com')){
            return false;
        }
    
        if(email.includes('@.') || email.includes('.@')){
            return false;
        }
    
        if(email[0] === '@'){
            return false;
        }
        return true;
    }

    function isChecked(gender){
        if (!(gender[0].checked || gender[1].checked)) {
            return false;
        }
    
        return true;
    }

    function samePass(confirmPass, pass){
        if(confirmPass == pass){
            return false;
        }
        return true;
    }

    function isNumber(age){
        if(isNaN(age)){
            return true;
        }
        return false;
    }