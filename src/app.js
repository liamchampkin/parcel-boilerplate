let count = 0;
	let btn = document.getElementById("btn");
	let disp = document.getElementById("display");

	btn.onclick = function () {
							count++;
	disp.innerHTML = count;
}

window.test = function test() {
	console.log("hey there sweet cheeks");
}