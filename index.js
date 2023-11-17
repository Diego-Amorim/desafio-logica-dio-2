let result = rate(130, 40);
let ranking = rank(result);

console.log(
  "O heroi possui um saldo de " + result + " vitorias e esta no rank " + ranking
);

function rate(victories, defeats) {
  let rating = victories - defeats;
  return rating;
}

function rank(result) {
  let status = "";
  if (result <= 10) {
    status = "Ferro";
  } else if (result <= 20) {
    status = "Bronze";
  } else if (result <= 50) {
    status = "Prata";
  } else if (result <= 80) {
    status = "Ouro";
  } else if (result <= 90) {
    status = "Diamante";
  } else if (result <= 100) {
    status = "Lendario";
  } else {
    status = "Imortal";
  }
  return status;
}
