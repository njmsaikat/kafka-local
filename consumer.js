//const Kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")

run();
async function run(){
    try
    {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers" :["127.0.0.1:9092"]
        })

        const consumer = kafka.consumer({"groupId": "test"})
        console.log("Connecting.....")
        await consumer.connect()
        console.log("Connected!")
        
/* Subscribing to the topic "Users" and it is reading from the beginning of the topic. */
        await consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })
        
/* Reading the messages from the topic. */
        await consumer.run({
            "eachMessage": async result => {
                console.log(`RVD Msg ${result.message.value} on partition ${result.partition}`)
            }
        })

    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }
    finally{
        
    }


}