function calculateresult(){
let n = document.getElementById("subject").value;
let total=0;
for(let i=1;i<=n;i++){
  let marks = parseInt(prompt("Enter number ",i,"  subject"));
  total = total+marks;  
}
let avg = total/n;
let grade;

if(avg>90){
 grade = "Grade A";
}
else if(avg>70){
 grade = "Grade B"; 
}
else if(avg>60){
 grade = "Grade C"; 
}
else if(avg>45){
  grade = "Grade D";
}
else {

grade = "Grade E";
}
document.getElementById("result").innerHTML= "Total Marks:"+total+"<br>"+"Average:"+avg+"<br>"+"Grade:"+grade; 
}