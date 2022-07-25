function hideCharacters(email, domainFlag) {
    let hiddenEmail = "";
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    // check if valid email
    if (regex.test(email)) {

    // hide characters before @
    let userName = email.split("@")[0];
    userName = "*" + userName.substring(1, userName.length-1) + "*";
    hiddenEmail = userName + "@" + email.split("@")[1];
    
    if (domainFlag) {
        // hide characters after @
        let domain = email.split("@")[1];
        let domainArray = domain.split(".");
        domainArray[0] = "*" + domainArray[0].substring(1, domainArray[0].length-1) + "*";
        domain = domainArray.join(".");
        hiddenEmail = hiddenEmail.split("@")[0] + "@" + domain;
    }

    return hiddenEmail;

    } else {
        return email;
    }

}

console.log(hideCharacters("example@example.co.af.edu", true));

document.getElementById("input").innerHTML += 'example@example.co.af';

document.getElementById("output").innerHTML += hideCharacters("example@example.co.af.edu", false);

document.getElementById('output-2').innerHTML += hideCharacters("example@example.co.af", true);