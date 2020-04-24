window.onload=function(){

let calculator=document.querySelector('.calculator')
let keys=calculator.querySelector('.calculator__keys')
keys.addEventListener('click ',function(e) {
if (e.target.matches('button')) {
	let key=e.target
	let action=key.dataset.action
	if (!action) {
		console.log('number key!')
	}if (action==='add'|| action==='subtract'|| action==='multiplay'||action==='divide') {
		console.log('operator key!')
	} 
	if (action==='decimal') {
		console.log('decimal key!')
	}if (action==='clear') {
		console.log('clear key!')
	}if (action==='calculate') {
		console.log('equal key!')
	}	 	
}
})

	const display = document.querySelector('.calculator__display')
	keys.addEventListener('click', e=>{
		if (e.target.matches('button')) {
			const key= e.target
			const action= key.dataset.action
			const keyContent=key.textContent
			const displayNum= display.textContent

			if (!action) {
				if (displayNum==='0') {
					display.textContent=keyContent
				}else {
					display.textContent=displayNum+keyContent
				}

			} 
		}
	})
}

