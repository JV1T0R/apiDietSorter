import 'dotenv/config'
import postgres from 'postgres'

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID} = process.env
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3Dep-black-darkness-a5r0okgi-pooler`


export const sql = postgres(URL, { ssl: 'require' })