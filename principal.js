var banners =
["Os melhores do Brasil!", "Qualidade e preço baixo!", "Venha já"];
var bannerAtual = 0;

function trocaBanner() {
document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
bannerAtual = bannerAtual + 1;
if(bannerAtual >= 3){
	bannerAtual = 0;
}
}
setInterval(trocaBanner, 2000);