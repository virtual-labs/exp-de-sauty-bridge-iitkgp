
var w,check=0;


function add(x,y)
{ 
	var z=[];
	z[0]=x[0] + y[0];
	z[1]=x[1] + y[1];
	return z;
}
function mult(x,y)
{ 
	var z=[];
	z[0]=(x[0] * y[0]) - (x[1] * y[1]);
	z[1]=(x[0] * y[1]) + (x[1] * y[0]);
	return z;
}
function div(x,y)
{ 
	var z=[]; var t=[];
	t[0]=(y[0]) / ((y[0] * y[0]) + (y[1] * y[1]));
	t[1]=(-1 * y[1]) / ((y[0] * y[0]) + (y[1] * y[1]));
	z=mult(x,t);
	return z;
}

/////////////////////////////// The code starts from here/////////////////////////////////////
function Set_c()
{
	var image = document.getElementById('myImage');
	if (image.src.match("s2")) 
	{
		alert('Switch off the circuit first.');
	}
	else
	{
		document.f1.r1.value= 5;
		document.f1.C2.value= parseFloat(document.getElementById('c33').value);
	}
}
function simulate_rc()
{
	if(check==1)
	{
		var C1=parseFloat(document.getElementById('C1').value);
		var R3=parseFloat(document.getElementById('R3').value);
		var R4=parseFloat(document.getElementById('R4').value);
	    document.f1.c333.value = ((R3/R4)*C1) * 1000000;
		var R1=parseFloat(document.getElementById('R1').value);
		var r1=parseFloat(document.getElementById('r1').value);
		var R2=parseFloat(document.getElementById('R2').value);
		var p=(R3/R4)*(R1+r1);
		var R21= (R2 < p) ? document.getElementById('R2').value: alert('select a greater value of R2');
		document.f1.r333.value = (((R3/R4)*(R1+r1))-R21);
		document.f1.rd33.value = (w * ((R3/R4)*C1) * (((R3/R4)*(R1+r1))-R21)) ;  
	}
	else
	{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}

}
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;	 
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}
function changeImage() {
	
		var image = document.getElementById('myImage');
		var im5= document.getElementById('v1');
		var im6= document.getElementById('f1');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; cf3=1;
			im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');
			check=1;
			execute_ckt();
		} else {
			image.src = "./images/s1.png"; cf3=0;
			im5.removeAttribute('readonly'); im6.removeAttribute('readonly');
			document.f1.A1.value = 0; check=0;
			perform_meter();
			document.f1.A2.value='';
			document.f1.c333.value='';
			document.f1.r333.value='';
			document.f1.rd33.value='';
			
		}
	}
	function execute_ckt()
	{
		if(check==1)
		{
			document.f1.A1.value=0;
			var R1=[], C1=[], r1=[], R3=[], R4=[], v1=[], C2=[], r2=[], R2=[], f1;
			var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
			f1=parseFloat(document.getElementById('f1').value);
			w= 2*3.141*f1;
			r2[0]=parseFloat(document.getElementById('r333').value); r2[1]=0;
			r1=[5,0];
			R3[0]=parseFloat(document.getElementById('R3').value); R3[1]=0; 
			R4[0]=parseFloat(document.getElementById('R4').value); R4[1]=0; 
			R1[0]=parseFloat(document.getElementById('R1').value); R1[1]=0; 
			R2[0]=parseFloat(document.getElementById('R2').value); R2[1]=0; 
			C1[1]=(-1 / (w * parseFloat(document.getElementById('C1').value))); C1[0]=0; 
			C2[1]=(-1 / ((w * parseFloat(document.getElementById('C2').value)) * 0.000001)); C2[0]=0; 
			v1[0]=parseFloat(document.getElementById('v1').value); v1[1]=0; 
			
			z1=add(add(add(C1,r1),R1),R3);
			z2=add(add(add(C2,r2),R2),R4);
			z=div(mult(z1,z2),add(z1,z2));
			//i=div(v1,z); alert(i);
			i1=div(mult(div(v1,z),z2), add(z1,z2)); 
			i2=div(mult(div(v1,z),z1), add(z1,z2)); 
			dv=add(mult(i1,R3),(mult([-1,0], mult(i2,R4))));
			//alert(dv[0]); alert(dv[1]);
			dvv=(Math.sqrt((dv[0] * dv[0]) + (dv[1] * dv[1])))*1000 ;
			document.f1.A1.value= dvv.toPrecision(5);
			document.f1.A2.value= dvv.toPrecision(5);
			perform_meter();
		}
		
	}





