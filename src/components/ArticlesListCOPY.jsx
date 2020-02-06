// import Axios from "axios";
// import { getArticles } from "../api";
// // import GetArticles from api file
// import * as api from '../api'

// class ArticlesList extends Component {
//   state = { articles: [], isLoading: true }
//   render() {
//     if (isLoading) return <p>Loading...</p>
//     const {articles} = this.state
//     return <ul>
//       {articles.map((article) => {
//         return <li key={topic.topic_id}>
//           <h3>{topic.topic_title}</h3>
//         </li>
//       })}
//     </ul>
//     return (
//       <div></div>
//     );

//     componentDidMount() {
//       this.fetchArticles()
//     }

//     componentDidUpdate(prevProps, prevState) {
// if (prevProps.topic !== this.props.topic) {
// this.fetchArticles()
// }
//     }

//     fetchArticles = () => {
//       const {topic} = this.props
//       api.getArticles(topic)
//       .then(({articles}) => {
//         this.setState({ articles: articles, isLoading: false})
//       })
//     }

//   }
// }

// export default ArticlesList;
