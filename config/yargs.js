const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption:true,
                describe: 'es la base del número '
            })
            .option('h',{
                alias: 'hasta',
                type: 'boolean',
                //demandOption:true,
                default:10,
                describe:'El maximo valor de la tabla'
            })
            
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                //demandOption:true,
                default:false,
                describe:'Muestra la tabla de multiplicar'
            })
            
            .check((argv, options)=> {
                if(isNaN(argv.b)){
                    throw 'la base tiene que ser un número';
                }
                return true;
            })
            .argv;

module.exports= argv;