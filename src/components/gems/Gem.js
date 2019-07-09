import React from 'react'

const Gem = ({ image, location, user }) => {
  return (
    <div className="column col-3 col-lg-6 col-sm-12">
      <div className="card">
        <div className="card-image">
          <img src={image} className="img-responsive"/>
        </div>
        <div className="card-header">
          <div className="card-title h5">{location}</div>
        </div>
        <div className="card-body">
          <div className="card-subtitle text-gray">
            By {user.username}
            {
              user.userType === 'Local' ? <span> 🔖 </span> : <span></span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gem
