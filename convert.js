const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')
let arr = []

// let content = fs.readFileSync(path.join(__dirname,'customer-data.csv'),'utf8');

const csvFile = path.join(__dirname,'customer-data.csv')
csv()
	.fromFile(csvFile)
	.on('json',(jsonObj) => {
		arr.push(jsonObj)
	}). on('done', (error)=>{
		if (error) {	
			console.log(error)
		}
		fs.writeFile('customer-data.json',JSON.stringify(arr,null,' '),(e) => {
			if (e) {
				throw e
			}
			console.log('the file has been converted')
		})
})


