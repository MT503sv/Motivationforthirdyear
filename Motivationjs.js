class Motivador {
    constructor(elemento) {
        this.elemento = elemento;
        this.frases = [
            "El esfuerzo de hoy es el éxito de mañana. No importa cuán difícil sea el camino, cada paso que das te acerca a tu meta.",

            "Cada línea de código que escribes te hace mejor. No tengas miedo de cometer errores, porque en ellos reside el aprendizaje.",

            "Sigue adelante, incluso cuando sientas que no avanzas. La perseverancia y la constancia son las llaves del verdadero conocimiento.",

            "El único límite es tu propia determinación. Cree en ti mismo, supera los desafíos y demuestra de lo que eres capaz.",

            "La certificación es solo un paso más en tu gran camino. Lo más valioso es el conocimiento y la pasión que has cultivado en este viaje.",

            "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",

            "No te compares con los demás, compárate con la persona que eras ayer. Cada día es una oportunidad para mejorar.",

            "No hay fracasos, solo aprendizajes. Cada error es un paso más hacia la excelencia.",

            "Lo que hoy parece un sacrificio, mañana será la base de tu éxito. Mantente firme en tu camino.",
            
            "Cree en ti mismo incluso cuando nadie más lo haga. La confianza en ti mismo es tu mejor herramienta." 
        ];
        this.indiceActual = 0;
        this.agregarEstilos();
        this.iniciarCiclo();
    }

    agregarEstilos() {
        const estilo = document.createElement("style");
        estilo.textContent = `
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(135deg, #2980b9, #6dd5fa, #ffffff);
                font-family: 'Arial', sans-serif;
                margin: 0;
            }
            .mensaje {
                font-size: 24px;
                font-weight: bold;
                color: #fff;
                text-align: center;
                padding: 20px;
                background: rgba(0, 0, 0, 0.6);
                border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                max-width: 80%;
                animation: fadeIn 2s ease-in-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(estilo);
    }

    mostrarFrase() {
        this.elemento.textContent = this.frases[this.indiceActual];
        this.indiceActual = (this.indiceActual + 1) % this.frases.length;
    }

    iniciarCiclo() {
        this.mostrarFrase();
        setInterval(() => {
            this.mostrarFrase();
        }, 10000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const mensajeElemento = document.getElementById("motivacion");
    new Motivador(mensajeElemento);
});