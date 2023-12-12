import axios from "axios";
import {ref} from "vue";

const apiEndpoint = "https://webtech-api.forge-panel.xyz";
const instanceAxios = axios.create({
    baseURL: apiEndpoint
})

const getArticles = () => {
    const articles = ref(null)
    const articlesFilter = ref(null)
    instanceAxios.get("/articles").then((response => {
        setTimeout(() => {
            articles.value = response.data;
            articlesFilter.value = articles.value;
        }, 500)
    }))
    return {articles, articlesFilter}
}

const getArticle = (articleId) => {
    const article = ref(null);
    instanceAxios.get(`/article?id=${articleId}`).then(response => {
        setTimeout(() => {
            article.value = response.data;
        }, 500)
    })
    return {article}
}

const getUser = (userId) => {
    const user = ref(null);
    instanceAxios.get(`/user?id=${userId}`).then(response => {
        setTimeout(() => {
            user.value = response.data;
        }, 500)
    })
    return {user}
}

export {
    getArticles,
    getArticle,
    getUser
}