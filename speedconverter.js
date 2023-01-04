/* author: katsafados Nikolaos

Περιγραφή

Αρχείο που περιέχει συναρτήσεις για την μετατροπή μονάδων μέτρησης ταχύτητας. 
Οι συναρτήσεις θα χρησιμοποιηθούν στην κατασκευή ενός υπολογιστή σε μορφή ιστοσελίδας, 
όπου ο χρήστης θα έχει τη δυνατότητα να εισάγει τιμές σε μία μονάδα μέτρησης ταχύτητας 
και να την μετατρέπει στην μονάδα μέτρησης ταχύτητας που επιθυμεί. 

*/

     function myResult(){


	option_from = inputType.value;
	option_to = resultType.value;

 	if(option_from === "miles" && option_to==="kilometers"){
		//Μετατροπή από μίλια σε χιλιόμετρα
		result.value = Number(input.value) * 1.609344;
	}else if(option_from === "miles" && option_to==="knots"){

		//Μετατροπή από μίλια σε κόμβους
		result.value = Number(input.value) / 101.1507790;

	}else if(option_from === "miles" && option_to==="miles"){
		//Μετατροπή από μίλια σε μίλια
		result.value = input.value
	}

    if(option_from === "kilometers" && option_to==="miles"){
		//Μετατροπή από χιλιόμετρα σε μίλια 
		result.value = Number(input.value) / 1.609344;
	}else if(option_from === "kilometers" && option_to==="knots"){
		//Μετατροπή από χιλιόμετρα σε κόμβους 
		result.value = Number(input.value) / 1.852;
	}else if(option_from === "kilometers" && option_to==="kilometers"){
		//Μετατροπή από χιλιόμετρα σε χιλιόμετρα
		result.value = input.value
	}

    if(option_from === "knots" && option_to==="miles"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) *1.150779;
	}else if(option_from === "knots" && option_to==="kilometers"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) *1.852;
	}else if(option_from === "knots" && option_to==="knots"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}
}