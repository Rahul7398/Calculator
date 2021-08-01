const theme = document.getElementById('theme');
var exp = document.getElementById("inputexp");
var inpstring = document.getElementById("inputnormal");
var exp_ = "";
var inp_ = "";
var his = document.getElementById("history");
var his_="";
var his_2="<center><h1>History</h1></center><br>";


function toggle_theme() {
  if (theme.getAttribute("href") == "dist/css/style.css") {
    theme.href = "dist/css/styledark.css";
  } else {
    theme.href = "dist/css/style.css";
  }
}

function takeinput(idname) {
	const s = document.getElementById(idname).innerHTML;
	inp_ +=s;
	inpstring.innerHTML = inp_;
}

function takeop(idname){
	const s = document.getElementById(idname).innerHTML;
	let x = exp_.substr(exp_.length-1);
	
	if((x==="+" || x==="-" || x==="/" || x==="*") && s!=="="){
		exp_ = exp_.substr(0,exp_.length-1);
		console.log(x+","+exp_);
		exp.innerHTML = exp_;
		inp_ = exp_;
	}
	if(s==="+" || s==="/"|| s==="-" ){
		exp_ = inp_+s;
		//exp.innerHTML +=inpstring.innerHTML+s;
		exp.innerHTML = exp_;
		inpstring.innerHTML = "";
		inp_="";

	}else if(s==="x"){
		exp_ = inp_+'*';
		//exp.innerHTML +=inpstring.innerHTML+s;
		exp.innerHTML = inp_+s;
		inpstring.innerHTML = "";
		inp_="";

	}else if(s==="="){
		let explast = exp_.substr(exp_.length-1);
		exp_ += inp_;
		let res = eval(exp_);
		inpstring.innerHTML = res;
		exp.innerHTML +=inp_;
		inp_ = res;
		his_ = "<p>"+exp.innerHTML+" = "+res+"</p><br>" + his_;
		his.innerHTML=his_2 + his_;
		
	}
}

function back() {
	if(inp_==="" && exp!==""){
		inp_ = exp_.substr(0,exp_.length-1);
		inpstring.innerHTML = inp_;
		exp_="";
		exp.innerHTML = exp_;
	}
	else if(inp_!==""){
		inp_ = inp_.substr(0,inp_.length-1);
		inpstring.innerHTML = inp_;
	}
}
function clearall() {
	inp_="";
	inpstring.innerHTML = inp_;
	exp_="";
	exp.innerHTML = exp_;

}