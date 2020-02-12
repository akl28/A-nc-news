import axios from "axios";
const baseURL = "https://anna-nc-news.herokuapp.com/api";

export const getArticles = topic => {
  return axios
    .get(`${baseURL}/articles/`, {
      params: {
        topic: topic
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleByID = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleID = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

// export const postCommentByArticleID = (article_id, comment) => {
//   return axios
//     .post(`${baseURL}/articles/${article_id}/comments`, comment)
//     .then(({ data }) => {
//       console.log(data, "data <<<<<");
//       return data.comment;
//     });
// };
