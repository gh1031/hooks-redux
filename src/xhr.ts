interface XHRConfig {
  url: string;
  method?: 'get' | 'post';
  data?: any;
}

export default function <T extends XHRConfig>(config: T) {
  return new Promise((resolve) => {
    const { url, method = 'get', data } = config;
    const xhr = new XMLHttpRequest();
    xhr.open(method, `/proxy/${url}`);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.addEventListener('load', function (evt) {
      resolve(JSON.parse(evt.target.response))
    })
    xhr.send(JSON.stringify(data))
  })
}
