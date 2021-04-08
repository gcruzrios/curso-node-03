const fs = require('fs');
const crearArchivo= async (base = 5, listar = false) => {
    try {

        let salida = '';

        for (let i=1; i<= 10; i++){
            salida += (`${base} x ${i} = ${ base * i }\n`);
        }

        if(listar){
            console.log("===================================");
            console.log(`===== TABLAS De MULTIPLICAR =======`);
            console.log("===================================");
            console.log(salida);
        }
    
        
        
        
        
        // fs.writeFile(`tabla-${ base }.txt`, salida, (err)=>{
        //     if(err) throw err;
        
        //     console.log(`tabla-${ base }.txt creado`);
        // })
        
        fs.writeFileSync(`tabla-${ base }.txt`, salida)
        
        return (`tabla-${ base }.txt`);

    } catch (error) {
        throw error
    }
    
}

module.exports = { crearArchivo }