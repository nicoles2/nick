function quant(){
	document.getElementById("começo").className="inv";
	document.getElementById("fim").className="visi";
	var valor=+document.getElementById("valor").value;
	if (valor<=1903.98) {
		document.getElementById("result").innerHTML=("Salário mensal: "+valor+"<br>Valor do Imposto: Isento de Imposto.");
	}
		if ((valor>=1903.98)&&(valor<=2826.65)) {
			var r1=(valor*7.5)/100;
			document.getElementById("result").innerHTML=("Salário mensal: "+valor+"<br>Valor do Imposto: 7,5% - R$"+r1);
		}
			if ((valor>=2826.65)&&(valor<=3751.5)) {
				var r2=(valor*15)/100;
				document.getElementById("result").innerHTML=("Salário mensal: "+valor+"<br>Valor do Imposto: 15% - R$"+r2);
			}
				if ((valor>=3751.5)&&(valor<=4664.68)) {
					var r3=(valor*22.5)/100;
					document.getElementById("result").innerHTML=("Salário mensal: "+valor+"<br>Valor do Imposto: 22,5% - R$"+r3);
				}
					if(valor>=4664.68){
						var r4=(valor*27.5)/100;
						document.getElementById("result").innerHTML=("Salário mensal: "+valor+"<br>Valor do Imposto: 	27,5% - R$"+r4);
					}
			}
function back(){
	document.getElementById("começo").className="visi";
	document.getElementById("fim").className="inv";
}