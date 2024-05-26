function uno (dos) {
    console.log("uno")
    setTimeout(dos,2000)
}

function dos () {
    console.log("dos")
}

setTimeout(() => uno(dos),5000)

let nombre = function(){
    console.log('nombre')
}
nombre()

let persona = () => console.log('leydy')

persona();

