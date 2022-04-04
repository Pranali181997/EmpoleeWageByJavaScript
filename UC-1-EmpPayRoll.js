const EMP_ABSENT=0;
let empCheck= Math.floor((Math.random() * 10)%2);
if(empCheck == EMP_ABSENT){
    console.log("Emp is present")
}
else{
    console.log("Emp is absent")
}