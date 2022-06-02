import axios from 'axios'
//const apiUrl = 'https://reqres.in/api/posts'
const apiUrl = 'https://proxy-service-2.dev.cloud.gentera.com.mx/ext-01-ps-0067/v1/fabrica-ofertas/api/private/send-rule-service?key=AIzaSyC-d4jRCBpvmZVXpVyB4PABAOyB96oj7H4'
const config = {
  url: '',
  params: {}, 
  data: {}, //body
}
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Authorization': 'ApiKey $2a$10$.z4QmZ3IFjgQ.vGVHugiOeU9e8g/cFwxFMpsok2ZPD0Y9jdaGQAKi',
  'x-app-id' : 'app1',
  'Access-Control-Allow-Origin': true,
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}
const saveItemList = (json) => {
    config.url = `${apiUrl}`;
    config.params = { key :'AIzaSyC-d4jRCBpvmZVXpVyB4PABAOyB96oj7H4' }
    config.data = JSON.stringify(json);//{ json };
    return new Promise((_res, rej) => { 
        axios.post(config.url, config.data, config).then((res) => {
            const response = res.data
            console.log(res);
            delete response['json']; //comentar con URL correcta
            _res(response)
          }).catch (err => {
              console.log(err)
          }) 
    })
  }
  export {saveItemList}