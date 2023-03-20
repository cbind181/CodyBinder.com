function feedbackFormValidate()
{
    var feedbackFormObj = document.getElementById("feedbackForm");
    var name = feedbackFormObj.name.value;
    var email = feedbackFormObj.email.value;
    var everythingOK = true;

    if (!validateName(name))
    {
        alert("Error: Invalid name.");
        everythingOK = false;
    }
    
    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }
    
    if (everythingOK)
    {
      alert("All the information looks good.\nThank you!");
      return true;
    }
    else
        return false;
}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}