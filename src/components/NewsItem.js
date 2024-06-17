import React from 'react'


const NewsItem = (props) => {
  let {title, description, author, date, imgURL, link, source, mode} = props;
  return (
    <div className="my-3">
        <div className={`card text-bg-${mode} border-${mode === "dark" ? 'info' : 'dark'}`} style={{ height: '400px' }}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
            <img src={imgURL ? imgURL : "https://source.unsplash.com/news/300×300"} className="card-img-top" alt="..." height={200} style={{ objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontWeight: "700", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}...</h5>
                <p className="card-text" style={{ fontSize: "15px", flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{description}...</p>
                <p className="card-text"><small style={{ fontSize: "13px", color: "grey" }}>By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                <a rel="noreferrer" href={link} target="_blank" className={`btn btn-${mode === "dark" ? "info" : "dark"}`}>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default NewsItem
