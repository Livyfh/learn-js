		

		
		 if (true == true){
			alert('hi')
		}else{
		 	alert('bye')
		 }

		
		if (false == false){
		 	alert('dude')
		 }else{
		 	alert('nope')
		 }

		if ("4" == 4){
			alert('barnard') 
		}else{
			alert('Columbia')
		}
		/*NOTE: == IS A LOSSE COMPARISON SO IT JUST LOOKS AT VALUES AND NOT THE TYPE*/

		if ("4" === 4){
			alert('barnard')
		}else{
			alert('columbia')
		}

		/*NOTE: === IS A STRICT COMPARISON*/

		if (true){
			alert('goo goo dolls')
		}else{
			alert('vanilla ice')
		}

		/*NOTE: TURTHY VALUES (TRUE, ANY "STRING" OR NUMBER NOT 0)
		AND FALSEY VALUES (NULL, UNDEFINED, 0, NaN, FALSE, EMPTY STRING "")*/ 
 

		if (("5" + "5") == "55"){
		 	alert('tofu')
		}else{
			alert('soybean')
		 }


		if ((6 + "5") == "65"){
			alert('richard')
		}else{
			alert('branson')
		}

		var something = 0;

		if(something != undefined){
			console.log("car")
		}else{
			console.log('van')
		}



		var age = 18
		var registered = true;

		if(age >= 18 && registered){
			console.log("You can vote")
		}else {
			console.log ("sorry not vote!")
		}

		/*NOTE: && BOTH MUST BE TRUE FOR CONSOLE TO BE RUN*/

		var age = 18
		var registered = true;

		if(age >= 18 || registered){
			console.log("You can vote")
		}else {
			console.log ("sorry not vote!")
		}
		/*NOTE: || EITHER CAN BE TRUE FOR CONSOLE TO BE RUN*/

		
