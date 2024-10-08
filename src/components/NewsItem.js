import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imgURL, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imgURL?imgURL:"https://www.livemint.com/lm-img/img/2023/09/15/600x338/Screenshot_2023-06-05_182152_1685969530948_1694763201310.png"} width="400" height="300" className="card-img-top" alt="..."/>
                        <div style={{height:"200px",display:"flex",flexDirection:"column",justifyContent:"space-between"}} className="card-body">
                            <div><h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p></div>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark"> Read More</a>      
                            {/* We can use target = '_blank' to get the link open in new tab */}
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
