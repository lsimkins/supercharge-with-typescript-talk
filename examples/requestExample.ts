interface HttpRequestHeaders {
  accept: string;
  acceptEncoding: string;
  cookie?: string; // "?" denotes this property is optional
  contentType: string;
  origin: string;
}

interface HttpResponse {
  body: string;
}

function makeGETRequest(url: string, headers: HttpRequestHeaders): HttpResponse {
  return {
    body: 'SO MANY KITTENS'
  };
}

const response = makeGETRequest(
  'http://freekittens.com',
  {
    accept: 'text/plain',
    acceptEncoding: 'utf-8',
    contentType: 'multipart/form-data',
    origin: 'http://needakitten.me'
  }
);

console.log(response);
