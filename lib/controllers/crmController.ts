import { Request, Response } from 'express';
const path = require('path');
var fs = require('fs');
const lineByLine = require('n-readlines');
const filePath = path.resolve();

export class ContactController{
	public getNameCount(req: Request, res: Response) {   
		let parseFile = filePath+'\\public\\oliver-twist.txt';
		const liner = new lineByLine(parseFile);
		let line;
		let lineNumber = 0;

		while (line = liner.next()) {
			var records = line.toString('ascii').split(" ");
			for(var n=0;n<records.length;++n){
				var str = records[n].toLowerCase();
                if(str.indexOf("aaron") !== -1)
					lineNumber++;
            }
		}
		var result = [{name:'Aaron', count: lineNumber}];
		
		res.json(result);
	}
	
	public parseText(req: Request, res: Response){
		let sourceFile = filePath+'\\public\\first-names.txt';
		var sourceList = fs.readFileSync(sourceFile).toString().split("\r");
		
		let unique = {};
		sourceList.forEach(function(i) {
			if(!unique[i]) {
			  unique[i] = true;
			}
		});
		let groupArr = Object.keys(unique);
		  
		let destFile = filePath+'\\public\\oliver-twist.txt';
		
		let finalRecord = [];	
		// groupArr.length
		for(var i = 0; i < 10; ++i){
			let totalCnt = 0;
			const destLiner = new lineByLine(destFile);
			let destLine;
			while (destLine = destLiner.next()) {
				var records = destLine.toString('ascii').split(" ");
				for(var n=0;n<records.length;++n){
					var str = records[n].toLowerCase();
					if(str.indexOf('oliver') !== -1){
						totalCnt++;						
					}
				}	
			}	
			
			finalRecord.push({name:groupArr[i], count: totalCnt});
		}
		
		finalRecord.sort(function(a, b){
			var keyA = a.count,
				keyB = b.count;
			
			if(keyA < keyB) return -1;
			if(keyA > keyB) return 1;
			return 0;
		});
		
		let textRecord = '';
		for(let val of finalRecord) {
			textRecord += val.name + ' ' + val.count + '\n';
		}
		
		fs.writeFile(filePath+'\\public\\download.txt', textRecord, (err) => {
			// throws an error, you could also catch it here
			if (err) throw err;

			// success case, the file was saved
			console.log('Data saved!');
		});
		
		res.json([{download_link: 'http://localhost:3001/download.txt'}]);
	}	
}