let dia = "sabado";

function fimDeSemana(dia){
	switch(dia){
		case 'segunda-feira':
		console.log("você tem aulas!");
		break;
		case 'quarta-feira':
		console.log("você tem aula!");
		break;
		case 'sexta-feira':
		console.log("você tem aula!");
		break;
		default:
		console.log("você não tem aulas");
		break;

	}
}

fimDeSemana(dia)