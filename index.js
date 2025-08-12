/*let nivelXP;*/
let nomeHeroi= "joao";
let nivelXP=1000;
let nivel;

if (nivelXP <= 1000) {
    nivel = "Ferro";
} else if (nivelXP >= 1001 && nivelXP <= 2000) {
    nivel = "Bronze";
} else if (nivelXP >= 2001 && nivelXP <= 5000) {
    nivel = "Prata";
} else if (nivelXP >= 5001 && nivelXP <= 7000) {
    nivel = "Ouro";
} else if (nivelXP >= 7001 && nivelXP <= 8000) {
    nivel = "Platina";
} else if (nivelXP >= 8001 && nivelXP <= 9000) {
    nivel = "Ascendente";
} else if (nivelXP >= 9001 && nivelXP <= 10000) {
    nivel = "Imortal";
} else { 
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);



