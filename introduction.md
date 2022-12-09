## Introduction

In this bridge, a capacitance is measured with a standard variable capacitance.The connection is shown in the figure. 


This bridge is a modification of De Sauty's bridge.





In this bridge, a capacitance is measured with a standard variable capacitance.The connection is shown in the figure. 
This bridge is a modification of De Sauty's bridge.

<div align="center">

![Rm501 Figure](images/desaut.jpg)

***Fig 1: Circuit diagram for measurement of capacitance by De Sauty's Modified Bridge***
</div>

<p>	`C_1`= A standard capacitor.</p><br>
							<p>`C_2`= A capacitor whose capacitance has to be measured.</p><br>
							<p> `r_1`,`r_2`= Representing losses of their corresponding capacitors.</p><br>
							<p>`R_4`,`R_3`= Non-inductive resistances.</p><br>
							<p>`R_1`,`R_2`= They are connected in series with `C_1` and `C_2` respectively.</p><br>
At balance condition,
<p style="text-align: center;">`(R_1 + r_1 + 1/ (jomegaC_1))*R_4 = (R_2 + r_2 + 1/ (jomegaC_2))*R_3` </p><br>
<p style="text-align: center;"> `(r_1 + R_1)*R_4 + R_4/(jomegaC_1) = (r_2 + R_2)*R_3 + R_3/(jomegaC_2)`</p>


Equating both the real and imaginary parts and separate them,

`R_4/R_3 = (R_2 + r_2)/(R_1 +r_1)`<br>
							<p style="text-align: center;">`C_2 = (R_3/R_4)*C_1`</p><br>
							<p style="text-align: center;">`C_2 = ((R_1 + r_1)/(R_2 + r_2))*C_1`</p><br>
							<p style="text-align: center;">`C_2 /C_1 = (R_1 + r_1)/(R_2 + r_2) = R_3 /R_4` ...&nbsp;eq.(1)</p><br>
              <p>The balance may be obtained by variation of  resistances `R_1`, `R_2`, `R_3` and `R_4`.</p><br><br>
              
 ***Phasor Diagram:***
 <div align="center">

![Rm501 Figure](images/picde.jpg)

***Fig 1: Phasor diagram for measurement of capacitance by De Sauty's Modified Bridge***
</div>
The angles `delta_1` and `delta_2` are the phase angles of `C_1` and `C_2` respectively. The dissipation factors for corresponding capacitors are <br>
`D_1 =tan(delta_1) =omegaC_1r_1`   &nbsp;&nbsp;    and   &nbsp;&nbsp;   `D_2 =tan(delta_2) =omegaC_2r_2` <br>
<p>From the eq.(1),</p><br>
<p>`C_2 /C_1 = (R_1 + r_1)/(R_2 + r_2)`</p><br>
<p>`C_2R_2 + C_2r_2 = C_1R_1 + C_1r_1`</p><br>
<p>Multiplying both sides by `omega`,</p><br>
<p>`omegaC_2R_2+ omegaC_2r_2 = omegaC_1R_1 + omegaC_1r_1`</p><br>
<p>`D_2 - D_1 = omega*C_2*(R_1*R_4/R_3 - R_2)`</p><br>

herefore, if the dissipation factor of  one of the capacitors is known, the dissipation factor for the other can be determined .


 
