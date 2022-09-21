		function validaTrk(trk){
			//função de validação dos códigos de rastreamento dos Correios conferiando pelos dois últimos dígitos numéricos (dígitos verificadores)
			trkDigits = trk.substring(2, 11);
			trkArr = trkDigits.split(""); 

			sumDigits = (trkArr[0]*8 + trkArr[1]*6 + trkArr[2]*4 + trkArr[3]*2 + trkArr[4]*3 + trkArr[5]*5 + trkArr[6]*9 + trkArr[7]*7);

			if ((sumDigits % 11) == 0){
				digVerif = 5;
			}
			else if ((sumDigits % 11) == 1){
				digVerif = 0;
			}
			else{
				digVerif = (11 - (sumDigits % 11));
			}

			if (digVerif == trkArr[8]){
				return 1;
			}
			else{
				return 0;
			}
		}