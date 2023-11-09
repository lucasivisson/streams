// Streams ->

// stdin eh uma stream de entrada e busca tudo que digitamos no terminal, pipe eh a forma de retornar dados para algum canto, stdout eh uma stream de saida para o terminal
// process.stdin.pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  // funcao de leitura de streams
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

new OneToHundredStream().pipe(process.stdout)