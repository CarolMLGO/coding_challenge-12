const fs=require('fs')

// // --- Part one ---
//reading data from file day1.txt
fs.readFile('./day1.txt',(err,data)=>{
	console.time('funccccc')
	//if there is an error, throw the following error
	if (err) {
		console.log('tttttttigerrrrr');
	}
	dataArray=data.toString().split('\n')

//---part one---
	const frequency = dataArray.reduce((acc,currentValue)=>{
		currentValue=Number(currentValue);
		return acc +=currentValue;},0)
    console.log('solution for part 1: frequency is ',frequency)

//---part two---
    let frequencyReached=[];
	let returnStatus = true;
	let acc = 0;
	//while returnStatus is true, it will nonstop loop
	while (returnStatus) {
		dataArray.forEach (item=>{
			currentValue=Number(item);
			acc += currentValue;
			//if find the repeated frequency, get out of the while loop by changing the returnStatus
			if(frequencyReached.includes(acc)&&returnStatus==true) {
				console.log('Solution for part two: frequency repeated is ',acc);
				return returnStatus = false;
			} else {
				frequencyReached.push(acc);
			}
		}
	)}
})

//----solutin for part one is 439
//----solution for part two is 124645