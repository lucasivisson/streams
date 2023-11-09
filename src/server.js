import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if(method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      name: 'John Doe',
      email: 'johndoe@example.com'
    })
    return res.end('Criação de usuário')
  }
  return res.end('Hello World')
})

server.listen(3333)
