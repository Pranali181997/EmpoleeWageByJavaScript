const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR_FOR_PARTTIME=4;
const WAGE_PER_HOUR_FOR_FULLTIME=8;
const EMP_WAGE_PER_HR=20;

let empHr=0;
let empCheck= Math.floor((Math.random() * 10)%2);
switch(empCheck){
    case IS_PART_TIME:
        empHr=WAGE_PER_HOUR_FOR_PARTTIME;
    break;
    case IS_FULL_TIME:
        empHr=WAGE_PER_HOUR_FOR_FULLTIME;
        break;
        case IS_ABSENT:
            empHr=0;
}
let DailyempWage =empHr*EMP_WAGE_PER_HR;
console.log(DailyempWage)

