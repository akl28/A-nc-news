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
// const getAllTopics = () => {
//   return axios
//     .get(`${baseURL}/topics`)
//     .then(({ data }) => {
//       return data.topics;
//     });
// };

// export const getArticles = (topic, sort_by, order_by) => {
//   // const endpoint = topic ? "?topic_slug=${topic}" : "";
//   return Axios.get("urlhere/api/topic", {
//     params: {
//       topic_slug: topic,
//       sort_by: sort_by,
//       order_by: order_by
//     }
//   }).then(() => {
//     return data.articles;
//   });
// };
