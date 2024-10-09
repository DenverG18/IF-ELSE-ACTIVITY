function GradeChecking(){
    let Grade = prompt("Enter Your Score: ");
    if (Grade >= 90){
        alert("Excellent Grade!");
    } else if (Grade >= 80){
        alert("Good Grade!");
    } else if (Grade >= 70){
        alert("Fair Grade.");
    } else {
        alert("Needs Improvement.");
    }
}