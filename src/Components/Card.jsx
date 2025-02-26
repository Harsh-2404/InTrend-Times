import PropTypes from "prop-types";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="cardContainer">
      {data.map((newsItem, index) => {
        if (!newsItem.urlToImage) {
          return null;
        } else {
          return (
            <div key={index} className="card">
              <img src={newsItem.urlToImage} />
              <div className="content">
                <a className="title" onClick={() => window.open(newsItem.url)}>
                  {newsItem.title}
                </a>
                <p>{newsItem.description}</p>
                <button onClick={() => window.open(newsItem.url)}>
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

// Card.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       description: PropTypes.string,
//       url: PropTypes.string,
//     })
//   ),
// };

export default Card;
