# kafka-local

localhost kafka test with docker

1. install node packages

   `npm install`

2. zookeeper and kafka container up

   `docker-compose up`

3. config topic with container broker

4. producer to publish msg
   `node producer.js {msg}`

5. consumer to receieve msg
   `node consumer.js`


Ref - [hnasr/javascript_playground/kafka](https://github.com/hnasr/javascript_playground/tree/master/kafka)
