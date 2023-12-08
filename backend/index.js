import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'
import emailRoutes from '../backend/routes/emailRoutes.js'

// 1) Variable Global

const app = express()

// 2) Leer Datos via Body

app.use(express.json())

// 3) Lectura de Variables de Entorno

dotenv.config()

// 4) Configuracion de CORS

const whiteList = [process.env.FRONTEND_URL]

const corsOption = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            // Permite la Conexion
            callback(null, true)
            console.log(colors.green.bold('Conexion establecida correctamente con el frontend'))
        } else {
            // No permite la Conexion
            callback(new Error('Error con la conexion de CORS'))
        }
    }
}

app.use(cors(corsOption))

// 5) Rutas Generales 

app.use('/api/email', emailRoutes)




const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(colors.green.bold(`Servidor Levantado en el puerto ${PORT}`))
})

