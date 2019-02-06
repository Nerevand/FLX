let login = prompt(`Please, input your login!`, ``);
if(login){
    login = login.trim();
}
if (login === `User` || login === `Admin`) {
    let password = prompt(`Hello User, please enter your password here`, ``).trim();
    if (password.length === 0 || password === null) {
        alert(`Canceled`);
    } else if ((password === `UserPass` && login === `User`) || (password === `RootPass` && login === `Admin`)) {
        let timeNow = new Date().getHours();
        if (timeNow < 20) {
            alert(`Good day, dear ${login}!`);
        } else {
            alert(`Good evening, dear ${login}!`);
        }
    }
} else if (login === `` || login === null) {
    alert(`Canceled`);
} else if (login.length < 4) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else {
    alert(`I don’t know you`);
}