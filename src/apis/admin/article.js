import axios from '../axios';

export function saveArticle(article) {
  return axios.post('/admin/article', JSON.stringify(article),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

export function updateArticle(articleId, article) {
  return axios.put(`/admin/article/${articleId}`, JSON.stringify(article),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

export function getArticles() {
  return axios.get('/admin/articles');
}

export function deleteArticle(articleId) {
  return axios.delete(`/admin/article/${articleId}`);
}
