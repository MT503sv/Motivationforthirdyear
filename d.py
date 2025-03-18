from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    mensaje = "Hola, este es un mensaje desde Python!"
    return render_template('index.html', mensaje=mensaje)

if __name__ == '__main__':
    app.run(debug=True)