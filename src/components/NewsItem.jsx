import React from "react";

const NewsItem = (props) => {
  

    let {title, description, imageUrl, newsUrl} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img className="card-img-top" src={!imageUrl ? "https://images.wsj.net/im-843138/social" : imageUrl} alt="something" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem;
