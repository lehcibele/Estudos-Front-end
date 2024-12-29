let hoje = new Date();
let amanha = new Date();
let dia = amanha.getDate();
amanha.setDate(dia + 1);

//alert(`Hoje: ${hoje}\n amanha ${amanha}`);

alert("Dia: " + hoje.toDateString() + "\nHora: " + hoje.toTimeString());