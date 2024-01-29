## Theory

In this bridge, a capacitance is measured with a standard variable capacitance.The connection is shown in the figure. 


This bridge is a modification of De Sauty's bridge.





In this bridge, a capacitance is measured with a standard variable capacitance.The connection is shown in the figure. 
This bridge is a modification of De Sauty's bridge.

<div align="center">

![Rm501 Figure](images/desaut.jpg)

***Fig 1: Circuit diagram for measurement of capacitance by De Sauty's Modified Bridge***
</div>

<p>C<sub>1</sub>= A standard capacitor.</p>
<p>C<sub>2</sub>= A capacitor whose capacitance has to be measured.</p>
<p>r<sub>1</sub>,r<sub>2</sub>= Representing losses of their corresponding capacitors.</p>
<p>R<sub>4</sub>,R<sub>3</sub>= Non-inductive resistances.</p>
<p><p>R<sub>1</sub>,R<sub>2</sub>= They are connected in series with C<sub>1</sub> and C<sub>2</sub> respectively.</p>
At balance condition,

$$ (R_1 + r_1 + \frac{1}{j \omega C_1})*R_4 = (R_2 + r_2 + \frac{1}{j \omega C_2})*R_3 $$

$$ (r_1 + R_1)*R_4 + \frac{R_4}{j \omega C_1} = (r_2 + R_2)*R_3 +  \frac{R_3}{j \omega C_2} $$


Equating both the real and imaginary parts and separate them,

$$ \frac{R_4}{R_3} = \frac{R_2 + r_2}{R_1 +r_1} $$

$$ C_2 = (\frac{R_3}{R_4})*C_1 $$

$$ C_2 = (\frac{R_1 + r_1}{(R_2 + r_2})*C_1 $$

$$ \frac{C_2}{C_1} = \frac{R_1 + r_1}{R_2 + r_2} = \frac{R_3}{R_4} ...eq.(1) $$

The balance may be obtained by variation of  resistances

$$ R_1, R_2, R_3 \ and \ R_4 $$

 ***Phasor Diagram:***
 <div align="center">

![Rm501 Figure](images/picde.jpg)

***Fig 2: Phasor diagram for measurement of capacitance by De Sauty's Modified Bridge***
</div>

$$ The angles \ \delta_1 \ and \delta_2 \ are \ the  \ phase \ angles \ of \ C_1 \ and \ C_2 \ respectively. \ The \ dissipation \ factors \ for \ corresponding \ capacitors \ are $$

$$ D_1 = tan(\delta_1) = \omega C_1 r_1  \  and \   D_2 =tan(\delta_2) =\omega C_2 r_2 $$

<p>From the eq.(1),</p><br>

$$ \frac{C_2}{C_1} = \frac{R_1 + r_1}{R_2 + r_2} $$

$$ C_2 R_2 + C_2r_2 = C_1R_1 + C_1r_1 $$

<p>Multiplying both sides by  ω

$$ \omega C_2R_2+ \omega C_2r_2 = \omega C_1R_1 + \omega C_1r_1 $$
  
$$ D_2 - D_1 = \omega* C_2*(R_1*\frac{R_4}{R_3} - R_2) $$

herefore, if the dissipation factor of  one of the capacitors is known, the dissipation factor for the other can be determined .
  
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

 
