import { createConnection } from'typeorm'

export const connectToDB = async () => {
    const conn = await createConnection()
    console.log(`App connected do db ${conn.options.database}`)

    process.on('SIGINT', () =>{
        conn.close().then(() => console.log('Db connection closed'))
    })

}
