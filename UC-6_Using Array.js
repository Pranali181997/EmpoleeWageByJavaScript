//store the daily wage along with the total wage
console.log("Welcome in empWage PRoblem By JS");

const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR_FOR_PARTTIME=4;
const WAGE_PER_HOUR_FOR_FULLTIME=8;
const WAGE_PER_HR=20;

function calculateDailyWage(empHr){
    return empHr*WAGE_PER_HR;
}
const WORKING_DAYS_IN_MONTH=20;
const MAX_HRS_IN_MONTH=160;
let empHr=0;
let TotalEmpHrs=0;
let totalworkingDay=0;
let empDailyWageArray=new Array();

while(TotalEmpHrs<=MAX_HRS_IN_MONTH && totalworkingDay<WORKING_DAYS_IN_MONTH)

{
totalworkingDay ++
let empCheck= Math.floor((Math.random() * 10)%3);
let empHrs=getWorkingHrs(empCheck);
TotalEmpHrs +=empHrs;

empDailyWageArray.push(calculateDailyWage(empHrs));

}
let empWage=calculateDailyWage(TotalEmpHrs);
console.log("Total Days: "+totalworkingDay+"Total Hrs: "+TotalEmpHrs+"Total Emp Wage: "+empWage);

function getWorkingHrs(empCheck)
{
let empHr=0;
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
return empHr;
}


