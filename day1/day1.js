const fs=require('fs')

// // --- Part one ---
fs.readFile('./day1.txt',(err,data)=>{
	console.time('funccccc')
	if (err) {
		console.log('tttttttigerrrrr');
	}

	dataArray=data.toString().split('\n')
	const frequency = dataArray.reduce((acc,currentValue)=>{
		let currentSign=currentValue[0]
		let currentNum=Number(currentValue.slice(1,currentValue.length));

		if (currentSign=="+") {
			return acc += currentNum;
		} else {
			return acc -= currentNum;
		}
	},0)
    console.log('frequency',frequency)
	console.timeEnd('funccccc')
})

//-----solutin for part one is 439


// --- Part two ---
fs.readFile('./day1.txt',(err,data)=>{
	if (err) {
		console.log('tttttttigerrrrr');
	}

	dataArray=data.toString().split('\n')
	let frequencyReached=[];
	let returnStatus = true;
	let acc = 0;

	while (returnStatus) {
		for (var i = 0; i<dataArray.length;i++) {
			let currentSign=dataArray[i][0]
			let currentNum=Number(dataArray[i].slice(1,dataArray.length));

			if (currentSign == "+") {
				currentValue = currentNum;
				acc += currentValue;
			} else {
				currentValue=-currentNum;
				acc += currentValue;}

			for (var j=1;j<frequencyReached.length;j++) {
				if (acc === frequencyReached[j]){
					console.log('repeat',acc);
					return returnStatus=false;
				} 
			}
			frequencyReached.push(acc);
		}
	}
})

//----solution for part two is 124645