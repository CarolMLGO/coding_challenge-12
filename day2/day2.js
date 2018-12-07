const fs=require('fs')

//reading data from file day2.txt
fs.readFile('./day2.txt',(err,data)=>{
	console.time('funccccc')
	//if there is an error, throw the following error
	if (err) {
		console.log('tttttttigerrrrr');
	}
	dataArray=data.toString().split('\n')

// // --- Part one ---
	let twoCounts = 0;
	let threeCounts = 0;
	function idSumCheck (dataArray){ 
		dataArray.forEach(item=>{
		let sortedItem = item.split("").sort().join("");//it's hard to extract seprate repeated character
		//break down the string, sort it and re-join it, it will be easier to extract repeated pattern.
		const duplicates = repeatedFind(sortedItem);

		//check the rules
		let twoSwitch=false;
		let threeSwitch= false;
		if (duplicates != null) {
			duplicates.map (item => {
				if(item.length===2){
					twoSwitch = true;
				}
				if (item.length===3) {
					threeSwitch = true;
				}
			})
		if (twoSwitch&&threeSwitch) {
			twoCounts += 1;
			threeCounts += 1;
		} else if (twoSwitch) {
			twoCounts += 1;
		} else if (threeSwitch) {
			threeCounts += 1;}
		}
		})
	}
	//function for finding all the duplicates including repeated exactly two of any letter and three of any letter
	function repeatedFind (str) {
		const repeated = str.match(/(.)\1+/gi);//. any character, \1 match the first parenthesized pattern  
		return repeated; 
	}

	idSumCheck(dataArray);
	console.log('solution for part 1, idSumCheck:',twoCounts*threeCounts);
// // --- Part two ---
function commonLetterCheck (dataArray){ 
	for (var i=0; i< dataArray.length-1; i++){
		let currentStr=dataArray[i].slice(0,-1); //strip the last \r
		const len = currentStr.length;//get the length for each box
		for (let j=i+1; j< dataArray.length; j++) {
			let compareStr = dataArray[j];
			//compare current string with the rest, commonLetterNum increased by 1 when common letter found
			let commonLetterNum = 0;
			for (let k = 0; k<len; k++) {
				if (currentStr[k]===compareStr[k]) {
					commonLetterNum+=1;
				}
			}

			//after two correct box IDs found, strip the differing letter
			if(commonLetterNum === len-1) {
				const commons=[];
				for (let m=0;m<len;m++){
					if(currentStr[m]===compareStr[m]) {
						commons.push(currentStr[m])
					}
				}
				console.log('solution for part 2, common letter:',commons.join(""));
				return commons
			}
		}
	}
	}
	commonLetterCheck (dataArray);
})
