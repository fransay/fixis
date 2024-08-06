
enum TimeUnits{seconds, minutes, hours, days, weeks, months, years, none}

class Time{
    private time: number;
    private units: TimeUnits;

    constructor(time: number, units: TimeUnits){
        this.time = time, 
        this.units = units
    }

    get getTime(){
        return this.time;
    }
}

export default Time;
