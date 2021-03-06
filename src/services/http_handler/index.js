import InstanceAxios from './configAxios'

class HttpHandler {
  get (url, config = {}) {
    return InstanceAxios()({
      method: 'get',
      url: url,
      config
    })
  }

  post (url, payload, config = {}) {
    return InstanceAxios()({
      method: 'post',
      url: url,
      data: payload,
      config
    })
  }
    
  put (url, payload, config = {}) {
    return InstanceAxios()({
      method: 'put',
      url: url,
      data: payload,
      config
    })
  }

  delete (url) {
    return InstanceAxios()({
      method: 'delete',
      url: url
    })
  }
}
const singletonInstance = new HttpHandler()
Object.freeze(singletonInstance)
export default singletonInstance
