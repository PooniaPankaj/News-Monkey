import React from 'react'
// import PropTypes from 'prop-types'

const  NewsItem =(props)=> {
 
    let { title, description, imageurl, newsurl, date, author, source } = props;
    let newDate = new Date(date);
    return (
        <div className="card h-100 my-4" >
          <img src={imageurl} className="card-img-top" alt="..." />
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:'0'
          }}>

          <span className="  badge rounded-pill bg-danger" >{source}</span>

          </div>
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {newDate.toGMTString()} </small></p>
            <a href={newsurl ? newsurl : "https://247wallst.com/wp-content/uploads/2023/02/Ford-F-series.jpg"} className="btn btn-sm btn-primary">Read More</a>

          </div>
        </div>

    )
  
}

export default NewsItem
