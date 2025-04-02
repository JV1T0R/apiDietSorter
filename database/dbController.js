import { sql } from './dbConection.js'

export class DatabaseController{
    async gerarAlmoço(){
        const proteina = await sql`SELECT * FROM proteinas ORDER BY random() LIMIT 1`
        const carboidrato = await sql`SELECT * FROM carboidratos ORDER BY random() LIMIT 1`
        const feijao = await sql`SELECT * FROM feijoes ORDER BY random() LIMIT 1`
        const legume = await sql`SELECT * FROM legumes ORDER BY random() LIMIT 1`
        const folhoso = await sql`SELECT * FROM folhosos ORDER BY random() LIMIT 1`
        
        return { proteina, carboidrato, feijao, legume, folhoso }
    }    
}