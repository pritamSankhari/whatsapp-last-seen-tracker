// FIRST OPEN WHATSAPP WEB AND THE INBOX YOU WANT TO TRACK
// INJECT THESE LINES OF CODE INTO CONSOLE
// ONLINE OR LAST SEEN TRACK SECTION

// let lastSeenData = document.querySelector('._3sgkv span') 


let isOnline = function(){

	try{
		let lastSeenData = $('._3sgkv span').textContent
		if(lastSeenData=='online'){
			return true;
		}	
		return false;
	}
	catch{
		return false;
	}			
	
}

let timeout;
let onlineTrace=[];
let timeInTimeOut=[];




let onlineBool=[];

let showOnlineTrace = function(){
	let data="";
	for(let i=0;i<onlineTrace.length;i++){
		let s='From '+onlineTrace[i][0]+' To '+onlineTrace[i][1]
		
		data+=s+'\n';

	}
	// return data;
	console.log(data);

}


let checkLastSeen = function(){

	let status = isOnline()
	
	onlineBool.push(isOnline())
	let lastOnlineBoolIndex = onlineBool.length-1

	let t = new Date() 

	if(status){
		

		time = t.getDate()+'-'+(t.getMonth()+1)+'-'+t.getFullYear()+' '+t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()

		if(lastOnlineBoolIndex==0){
			timeInTimeOut.push(time)
		}

		else if(onlineBool[lastOnlineBoolIndex-1]==false){
			timeInTimeOut.push(time)
		}

	}
	else{
		if(onlineBool[lastOnlineBoolIndex-1]==true){
			timeInTimeOut.push(time)	
			onlineTrace.push(timeInTimeOut)
			timeInTimeOut=[]
		}		
	} 

	timeout = setTimeout(checkLastSeen,1000)
}



checkLastSeen();