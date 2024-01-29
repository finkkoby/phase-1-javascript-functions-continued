// code your solution here
function saturdayFun(par = "roller-skate") {
    return `This Saturday, I want to ${par}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(sym = "*") {
    return function(adjective = "special") {
        return `You are ${sym}${adjective}${sym}!`
    }
}