import { HTTPClient } from 'src/boot/axios'

const setLivros = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('/livros')
      .then((suc) => {
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export {
  setLivros
}
