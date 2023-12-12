import axios from "axios";
const apiEndpoint = "http://localhost:3000";
const instanceAxios = axios.create({
    baseURL: apiEndpoint
})

const getArticles = () => {
    return new Promise((resolve) => {
        instanceAxios.get("/articles").then((response => {
            resolve(response.data)
        }))
    })
}

const getArticle = (articleId) => {
    return new Promise((resolve) => {
        instanceAxios.get(`/article?id=${articleId}`).then(response => {
            resolve(response.data)
        })
    })
}

const getUser = (userId) => {
    return new Promise(resolve => {
        instanceAxios.get(`/user?id=${userId}`).then(response => {
            resolve(response.data)
        })
    })
}

export {
    getArticles,
    getArticle,
    getUser
}