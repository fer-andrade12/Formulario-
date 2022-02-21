// validate já existe da biblioteca inserida
 // rules - são as regras do HTML
 // messages - são as mensagens p usuário

 $( "#form" ).validate({   	
	debug: true,

	rules: {
	  	 nome: {        required: true,        minlength: 10    }		
	},
	messages: {

	    nome: {
        	required: "<li>Por favor entre com seu nome.</li>",
	        minlength: "<li>Seu nome deve ser maior.</li>"
    		}

	 // , email: "<li>Por favor entre com seu email</li>"
		
	}
    }); // fechamento do validate