import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MOGODB_URL}/${DB_NAME}`
        )
        // console.log('Connection is:-', connectionInstance)
    } catch (err) {
        console.log('Monogdb connection error', err)
        process.exit(1)
    }
}

export default connectDB
