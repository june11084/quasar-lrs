import Axios from 'axios'

/*
export function someAction (context) {}
*/

export function getScoreApi (context) {
  console.log('getScoreAPI started')
  return Axios({
    method: 'get',
    url: `http://localhost:8080/score`,
    headers: {
    },
    data: {}
  }).then((response) => {
    console.log(response.data)
  })
}
