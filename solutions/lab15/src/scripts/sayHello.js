export let greet = (name,theDate) => {
    if (theDate) {
        var hours = theDate.getHours();
    }

    name = name ? name : 'Friend!';

    var greeting = getGreeting(hours,name);
    return greeting + ', ' + name;

};

let getGreeting = (rightNow,personName) => {
    var greetingLang = getLang(personName);
    if (rightNow < 12) {
        if (greetingLang === 'German'){
            return 'Guten Morgen';
        } else {
            return 'Good Morning';
        }

    }
    else if (rightNow > 12 && rightNow < 17){
        if (greetingLang === 'German'){
            return 'Guten Nachmittag';
        } else {
            return 'Good Afternoon';
        }
    }
    else if (rightNow > 17) {
        if (greetingLang === 'German'){
            return 'Guten Abend';
        } else {
            return 'Good Evening';
        }
    }
    else {
        if (greetingLang === 'German'){
            return 'Guten Tag';
        } else {
            return 'Hello';
        }
    }
};

let getLang = (personName) => {
    if (personName === 'Hans') {
        return 'German';
    }
};