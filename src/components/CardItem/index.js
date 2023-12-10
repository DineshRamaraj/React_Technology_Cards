// Write your code here.

import './index.css'

const CardItem = props => {
  const {eachItem} = props
  const {title, description, imgUrl, className} = eachItem
  return (
    <div className={`card-list ${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt="image_logo" className="card-image" />
      </div>
    </div>
  )
}

export default CardItem
