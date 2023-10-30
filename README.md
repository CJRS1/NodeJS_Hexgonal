{
    <!-- Que observe todo lo que esta en src -->
    "watch":["src/"],
    <!-- Que solo monitoree los de extension ts o json -->
    "ext": "ts json",
    <!-- Que ignore la carpeta de node_modules -->
    "ignore":["node_modules"],
    <!-- Si cambia, quiero que ejecute el programa ts-node -->
    "execMap": {
        "ts": "ts-node"
    },
    <!-- Informacion adicional sobre lo que se esta haciendo -->
    "verbose": true,
    <!-- Reiniciar el nodemon -->
    "restartable": "rs"
}

