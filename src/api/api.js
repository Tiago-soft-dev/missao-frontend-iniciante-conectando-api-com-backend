export const Api = {
    baseUrl: 'https://backend-integrar-com-o-frontend.onrender.com',

    personagem : {
        endpoint: function() {
            return Api.baseUrl + '/personagem'
        },
        readAll: function () {
            return this.endpoint() + '/'
        }
    },
    buildApiGetRequest: function (baseUrl) {
        return fetch(baseUrl, {method: 'GET'}).catch((error) => {
            console.error(`Erro ao carregar dados. ${error}`)
            toast.error('Erro ao carregar dados.')
          })
    }
}