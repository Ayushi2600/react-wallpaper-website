import React from 'react';
import PropTypes from 'prop-types'; //It ensures that the correct data types are passed in for each prop.

function WallpaperCard({ wallpaper, downloadWallpaper, onWallpaperClick }) {
  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={wallpaper.url}
        className="card-img-top"
        alt={wallpaper.title}
        onClick={() => onWallpaperClick(wallpaper)} // Select the wallpaper when clicked
        style={{ cursor: 'pointer' }}
      />
      <div className="card-body">
        <h5 className="card-title">{wallpaper.title}</h5>
        <button
          className="btn btn-primary"
          onClick={() => downloadWallpaper(wallpaper.url)}
        >
          Download
        </button>
      </div>
    </div>
  );
}

WallpaperCard.propTypes = {
  wallpaper: PropTypes.object.isRequired,
  downloadWallpaper: PropTypes.func.isRequired,
  onWallpaperClick: PropTypes.func.isRequired,
};

export default WallpaperCard;


