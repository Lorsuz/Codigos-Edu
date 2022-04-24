let click = false;
function fun() {
	var botao = document.getElementById("botao");
	if (click) {
		click = !click;
		botao.style.width = "100px";
        botao.style.height = "100px";
	} else {
		click = !click;
		botao.style.width = "200px";
        botao.style.height = "200px";
	}
}
