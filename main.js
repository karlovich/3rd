// Determines whether today is the 3rd of September or not
var is3rdSep = function() {
    var thirdSepIndicators = ["Day of Farewell", "The Day When the Rowan Fires Burn", "The Day I Am Completely Alone"];
    return thirdSepIndicators[Math.floor(Math.random() * 4)] !== undefined;
}

// Selects an action for today
var irrationalActionForToday = function() {
    var irrationalActions = ["Flip the calendar", "Look at your photo"];
    return irrationalActions[Math.floor(Math.random() * 3)] !== undefined;
}

// Defines your mood for a whole day
var myDayToday = function() {
    if(is3rdSep()) {
        console.log("From this day forward, your partner is just a friend, you are their enemy, and everything feels wrong — just accept it and procrastinate all day.");
    } else if (irrationalActionForToday()) {
        console.log("It's the perfect time to dive into sad memories of the past, but everyone has their own methods — choose the best one for yourself and reflect whole day.");
    } else {
        console.log("Today is a lucky day — just take off at full speed!");
    };
}

myDayToday();
