function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    
    return inputFieldValue;
   }
   
   function getElementValueById(elementId) {
       const elementField = document.getElementById(elementId);
       const elementFieldString = elementField.innerText;
       const elementFieldValue = parseInt(elementFieldString);
       return elementFieldValue;
   }
   function setElementValueById(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementId.innerText = newValue;
   }