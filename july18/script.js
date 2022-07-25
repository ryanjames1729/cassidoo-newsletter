function hideCharacters(email) {
    let hiddenEmail = "";

    // check if valid email
    if (email.includes("@")) {

    // hide characters before @
    let userName = email.split("@")[0];
    userName = "*" + userName.substring(1, userName.length-1) + "*";
    hiddenEmail = userName + "@" + email.split("@")[1];
    console.log(hiddenEmail);

    } else {
        return email;
    }

    // second flag, hide domain
}

console.log(hideCharacters("example@example.co.af"));

document.getElementById("input").innerHTML += 'example@example.co.af';

document.getElementById("output").innerHTML += '';