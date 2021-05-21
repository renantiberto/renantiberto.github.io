function calculaSoma() {
    var num1 = parseInt(document.getElementById('num1').value, 10);
    var num2 = parseInt(document.getElementById('num2').value, 10);
    document.getElementById('resultado').innerHTML = num1 + num2;
}

function maiorValor() {
    var a = parseInt(document.getElementById('num5').value);
    var b = parseInt(document.getElementById('num6').value);
    document.getElementById('resultado3').innerHTML = maior = Math.max(a, b);
}

function primo() {
    var numero = parseInt(document.getElementById('num7').value);
    var resposta = document.getElementById('resultado4');
    var divisores=0;

    for(var i=1 ; i<=numero ; i++)
        if(numero % i == 0)
            divisores++;
    
        if(divisores==2)
            resposta.innerHTML='É primo';
        else
            resposta.innerHTML='Não é primo';
}

function hipotenusa() {
    var cat1 = parseInt(document.getElementById('cat1').value);
    var cat2 = parseInt(document.getElementById('cat2').value);
    document.getElementById('resultado5').innerHTML = (Math.pow(cat1,2)) + (Math.pow(cat2,2));
}

function calculaSalario() {
    var sal = parseFloat(document.getElementById('sal').value);
    var reajuste = parseFloat(document.getElementById('reajuste').value);
    document.getElementById('resultado6').innerHTML = sal * reajuste;
}