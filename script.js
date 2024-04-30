function calcularArea() {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let pi = 3.14159

    let areaTriangulo = (a * c) / 2
    let areaCirculo = pi * Math.pow(c, 2)
    let areaTrapezio = ((a + b) * c) / 2
    let areaQuadrado = Math.pow(b, 2)
    let areaRetangulo = a * b

    document.querySelector('.tri').textContent = `A área do triangulo retâgulo é: ${areaTriangulo.toFixed(3)}`
    document.querySelector('.cir').textContent = `A área do circulo é: ${areaCirculo.toFixed(3)}`
    document.querySelector('.tra').textContent = `A área do trapezio é: ${areaTrapezio.toFixed(3)}`
    document.querySelector('.qua').textContent = `A área do quadrado é: ${areaQuadrado.toFixed(3)}`
    document.querySelector('.ret').textContent = `A área do retângulo é: ${areaRetangulo.toFixed(3)}`

    console.log(areaCirculo.toFixed(3))
    console.log(areaTriangulo.toFixed(3))
    console.log(areaTrapezio.toFixed(3))
    console.log(areaQuadrado.toFixed(3))
    console.log(areaRetangulo.toFixed(3))

    alert(`Calculado com valores A = ${a}, B = ${b}, e C = ${c}`)
}

function limparValores() {
    document.querySelector('.tri').textContent = ``
    document.querySelector('.cir').textContent = ``
    document.querySelector('.tra').textContent = ``
    document.querySelector('.qua').textContent = ``
    document.querySelector('.ret').textContent = ``

    document.getElementById('a').value = ``
    document.getElementById('b').value = ``
    document.getElementById('c').value = ``

    alert(`Valores resetados`)
}