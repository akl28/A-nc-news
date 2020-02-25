import axios from "axios";
const baseURL = "https://anna-nc-news.herokuapp.com/api";

export const getArticles = (topic, author, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles/`, {
      params: {
        topic: topic,
        author: author,
        sort_by: sort_by,
        order: order
      }
    })
    .then(({ data }) => {
      // console.log(data.articles, "<<");
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

export const postComment = (article_id, comment, user) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: user,
      body: comment
    })
    .then(({ data }) => {
      console.log(data.comment, "<<<<<<<");
      return data.comment;
    });
};

export const deleteCommentByID = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const patchVotesByCommentID = (comment_id, increment_by) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, {
    inc_votes: increment_by
  });
};

export const patchVotesByArticleID = (article_id, increment_by) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: increment_by
  });
};
