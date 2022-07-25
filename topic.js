//const Kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")

run();
async function run(){
    try
    {
/* Creating a new instance of the Kafka class. */
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers" :[
                "127.0.0.1:9092",
                "0.0.0.0:9092"
        ]
        })

        const admin = kafka.admin();
        console.log("Connecting.....")
        await admin.connect()
        console.log("Connected!")
        //A-M, N-Z
/* Creating a topic called Users with 2 partitions. */
        await admin.createTopics({
            "topics": [{
                "topic" : "Users",
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully!")
        await admin.disconnect();
    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }
    finally{
        process.exit(0);
    }


}