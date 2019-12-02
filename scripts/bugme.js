window.onload = function () {
  var myform = document.querySelector('#myform');

  myform.addEventListener('submit', function (element) {
    console.log('Form Submitted');
    var validationFailed = false;

    var firstname = document.querySelector('#firstname');
    var lastname = document.querySelector('#lastname');   
    var password = document.querySelector('#password');
    var email = document.querySelector('#email');

    // clear any previous error messages
    clearErrors();

    if (isEmpty(firstname.value.trim())) {
      validationFailed = true;
     
      displayErrorMessage(firstname, "You must fill in your First Name.");
    };

    if (isEmpty(lastname.value.trim())) {
      validationFailed = true;
      
      displayErrorMessage(lastname, "You must fill in your Last Name.");
    }

    if (isEmpty(password.value.trim())) {
      validationFailed = true;
      
      displayErrorMessage(password, "You must fill in your Password.");
    };

    if (!isValidPassword(password.value.trim())) {
        validationFailed = true;
       
        displayErrorMessage(password, "Incorrect format for Password.");
      };

    if (isEmpty(email.value.trim())) {
        validationFailed = true;
        
        displayErrorMessage(email, "You must fill in your Email Address.");
      };

    if (!isValidEmail(email.value.trim())) {
      validationFailed = true;
     
      displayErrorMessage(email, "Incorrect format for Email Address.");
    };


    if (validationFailed) {
      console.log('Please fix issues in Form submission and try again.');
      element.preventDefault();
    }
  });
};

/**
 * Check if value for a field is empty.
 */
function isEmpty(elementValue) {
  if (elementValue.length == 0) {
    console.log('field is empty');
    return true;
  }

  return false;
}

/**
 * Check if a valid password was entered.
 */

function isValidPassword(passwordInput) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordInput);
  }

/**
 * Check if a valid email address was entered.
 */
function isValidEmail(emailAddress) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress);
}


/**
 * Function to add an element after another element.
 */
function insertAfter(element, newNode) {
  element.parentNode.insertBefore(newNode, this.nextSibling);
}


/**
 * Clear all error messages
 */
function clearErrors() {
  var elementsWithErrors = document.querySelectorAll('.error');
  //console.log(elementsWithErrors);
  for (var x = 0; x < elementsWithErrors.length; x++) {
    elementsWithErrors[x].setAttribute('class', '');
    elementsWithErrors[x].parentNode.removeChild(elementsWithErrors[x].nextElementSibling);
    //console.log(elementsWithErrors[x].nextElementSibling);
  }

}

/**
 * Display error message next to field.
 */
function displayErrorMessage(formField, message) {
  formField.setAttribute('class', 'error');
  var errorMessageText = document.createTextNode(message);
  var errorMessage = document.createElement('span');
  errorMessage.setAttribute('class', 'error-message');
  errorMessage.appendChild(errorMessageText);
  //formField.insertAfter(errorMessage);
  insertAfter(formField, errorMessage);
}