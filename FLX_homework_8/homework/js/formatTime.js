function formatTime(time) {
    if (!Number(time)) {
        return `Incorect data!`;
    }
    let typeOfTime = {
        minute: 0,
        hour: 0,
        day: 0
    }
    for (var i = 0; i < time; i++) {
        typeOfTime.minute++;
        if (typeOfTime.minute === 60) {
            typeOfTime.minute = 0;
            typeOfTime.hour++;
        }
        if (typeOfTime.hour === 24) {
            typeOfTime.hour = 0;
            typeOfTime.day++;
        }
    }
    return typeOfTime.day + ' day(s) ' + typeOfTime.hour + 'hour(s) ' + typeOfTime.minute + 'minute(s).';
}
formatTime(1488);