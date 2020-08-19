const redis = require('redis')

const client = redis.createClient(6379, 'localhost')
client.set('hello','this is redis')

client.get('hello', (err,v)=>{
  if(!err){
    console.log('redis get', v);
  }
})