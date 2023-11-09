// Streams ->

// stdin eh uma stream de entrada e busca tudo que digitamos no terminal, pipe eh a forma de retornar dados para algum canto, stdout eh uma stream de saida para o terminal
// process.stdin.pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  // funcao de leitura de streams
  // Eh um método especial especifico ja implementado para a classe Readable do modulo stream do Node e eh usado para fornecer a implementacao de leitura de dados da fonte.
  _read() {
    const i = this.index++

    setTimeout(() => {
      if(i > 100) {
        // push eh o metodo que usamos em ReadableStreams para fornecer informacoes para quem estiver consumindo ela
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
  
        this.push(buf)
      }
    }, 1000)
  }
}

class MultiplyByTenStream extends Writable {
  // chunk eh o pedaço lido da stream de leitura, eh o que enviamos dentro do metodo push
  // encoding eh como essa informacao esta codificada
  // funcao que a stream de escrita precisa chamar quando terminar sua execaucao
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream().pipe(process.stdout)