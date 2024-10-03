//soma dos valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
});

//subtração dos valores
const btnsub = document.getElementById("sub");
btnsub.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let sub = parseInt(numero1) - parseInt(numero2);
    console.log(sub);
});

//multiplicação dos valores
const btnmulti = document.getElementById("multi");
btnmulti.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let multi = parseInt(numero1) * parseInt(numero2);
    console.log(multi);
});

//divisão dos valores
const btndiv = document.getElementById("div");
btndiv.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let div = parseInt(numero1) / parseInt(numero2);
    console.log(div);
});

