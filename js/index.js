function createForm() {
    const section = document.querySelector('.section')
    const form = document.createElement('form')

    const label = document.createElement('label')
    const textLabel = document.createTextNode("Valor: ")
    const input = document.createElement('input')
    input.type = 'number'
    input.id = 'inpValor'

    const pResultado = document.createElement('p')
    pResultado.id = 'resultado'

    const button1 = document.createElement('button')
    button1.className = 'btns_calc'
    button1.id = 'button1'
    const textButton1 = document.createTextNode("Calcular")
    const button2 = document.createElement('button')
    button2.className = 'btns_calc'
    button2.id = 'button2'
    const textButton2 = document.createTextNode("Calcular")
    const button3 = document.createElement('button')
    button3.className = 'btns_calc'
    button3.id = 'button3'
    const textButton3 = document.createTextNode("Calcular")
    const button4 = document.createElement('button')
    button4.className = 'btns_calc'
    button4.id = 'button4'
    const textButton4 = document.createTextNode("Calcular")
    const button5 = document.createElement('button')
    button5.className = 'btns_calc'
    button5.id = 'button5'
    const textButton5 = document.createTextNode("Calcular")

    label.appendChild(textLabel)
    label.appendChild(input)
    button1.appendChild(textButton1)
    button2.appendChild(textButton2)
    button3.appendChild(textButton3)
    button4.appendChild(textButton4)
    button5.appendChild(textButton5)

    form.appendChild(label)
    form.appendChild(pResultado)
    form.appendChild(button1)
    form.appendChild(button2)
    form.appendChild(button3)
    form.appendChild(button4)
    form.appendChild(button5)

    section.appendChild(form)
    document.body.appendChild(section)
}

function reload() {
    document.location.reload(true)
}
function ocultar() {
    const container = document.getElementById('container')
    container.style.display = 'none'
}

function primo() {
    ocultar()
    createForm()
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    const button4 = document.getElementById('button4')
    const button5 = document.getElementById('button5')
    button2.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    const form = document.querySelector('form')

    const handleSubmit = (event) => {
        event.preventDefault()

        let resultado = document.getElementById("resultado")
        resultado.style.display = "flex"
        const inpValor = document.getElementById("inpValor").value

        if (inpValor < 1 || inpValor == "") {
            window.alert("Digite um número maior do que 1.")
            resultado.style.display = "none"
        }
        else if (inpValor == 2 || inpValor == 3 || inpValor == 5 || inpValor == 7) {
            resultado.innerHTML = `${inpValor} é primo`
        } else if (inpValor % 2 == 0 || inpValor % 3 == 0 || inpValor % 5 == 0 || inpValor % 7 == 0) {
            resultado.innerHTML = `${inpValor} não é primo`
        } else {
            resultado.innerHTML = `${inpValor} é primo`
        }
        document.getElementById("inpValor").value = ""
    }
    form.addEventListener('submit', handleSubmit)
}
function imparPar() {
    ocultar()
    createForm()
    const button1 = document.getElementById('button1')
    const button3 = document.getElementById('button3')
    const button4 = document.getElementById('button4')
    const button5 = document.getElementById('button5')
    button1.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    const form = document.querySelector('form')

    const handleSubmit = (event) => {
        event.preventDefault()

        let resultado = document.getElementById("resultado")
        resultado.style.display = "flex"
        const inpValor = document.getElementById("inpValor").value

        if (inpValor == "") {
            window.alert("Insira um número.")
            resultado.style.display = "none"
        } else {
            if (inpValor % 2 == 0) {
                resultado.innerHTML = `${inpValor} é par!`
            } else if (inpValor % 2 != 0) {
                resultado.innerHTML = `${inpValor} é ímpar!`
            }
            document.getElementById("inpValor").value = ""
        }
    }

    form.addEventListener('submit', handleSubmit)
}
function quadrado() {
    ocultar()
    createForm()
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button4 = document.getElementById('button4')
    const button5 = document.getElementById('button5')
    button1.style.display = 'none'
    button2.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    const form = document.querySelector('form')

    const handleSubmit = (event) => {
        event.preventDefault()

        let resultado = document.getElementById("resultado")
        resultado.style.display = "flex"
        let inpValor = document.getElementById("inpValor").value

        if (inpValor === "") {
            window.alert("Insira um número.")
            resultado.style.display = "none"
        } else {
            resultado.innerHTML = `<p>${inpValor}² = ${inpValor ** 2}</p>`
            document.getElementById("inpValor").value = ""
        }
    }

    form.addEventListener('submit', handleSubmit)
}
function fatorial() {
    ocultar()
    createForm()
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    const button5 = document.getElementById('button5')
    button1.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button5.style.display = 'none'
    const form = document.querySelector('form')

    const handleSubmit = (event) => {
        event.preventDefault()

        let resultado = document.getElementById("resultado")
        resultado.style.display = "flex"
        const inpValor = document.getElementById("inpValor").value
        let res = inpValor
        const primeiro = inpValor - 1

        if (inpValor == "") {
            window.alert("Insira um número.")
            resultado.style.display = "none"
        } else if (inpValor < 0) {
            window.alert("Insira um número positivo.")
            resultado.style.display = "none"
        }

        for (let cont = primeiro; cont > 1; cont--) {
            res *= cont
        }

        resultado.innerHTML = `${inpValor}! = ${res}`
        document.getElementById("inpValor").value = ""
    }

    form.addEventListener('submit', handleSubmit)
}
function converterTemp() {
    ocultar()
    createForm()
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    const button4 = document.getElementById('button4')
    button1.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    const form = document.querySelector('form')

    const label = document.querySelector('label')
    label.innerHTML = "Celcius: <input type='number' class='inp' id='inpValor'>"

    const handleSubmit = (event) => {
        event.preventDefault()
        let resultado = document.getElementById("resultado")
        resultado.style.display = "flex"
        let inpValor = document.getElementById("inpValor").value

        if (inpValor == "") {
            window.alert("Insira um número.")
            resultado.style.display = "none"
        } else {
            const tempFahrenheit = (inpValor * 1.8) + 32;
            const tempKelvin = inpValor + 273.15;

            resultado.innerHTML = `Kelvin: ${tempKelvin}<br>Fahrenheit: ${tempFahrenheit}`

            document.getElementById("inpValor").value = ""
        }
    }

    form.addEventListener('submit', handleSubmit)
}