import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WallpaperCard from './components/WallpaperCard';

// This array serves  as a mock data source for the wallpapers.
const wallpapers = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    title: "Nature Wallpaper"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1658100890491-a0a509121ee4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "City Wallpaper"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVjaCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Tech Wallpaper"
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1675756583681-0f809804764c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T2NlYW4lMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Ocean Wallpaper"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516919549054-e08258825f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Food Wallpaper"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    title: "Car Wallpaper"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1599743319655-1cfad1a4e023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2F0JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    title : "Cat Wallpaper"
  },
  {
    id: 8,
    url : "https://images.unsplash.com/photo-1527093597399-bc64c58a7b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    title : "Flower Wallpaper"
  },
  {
    id: 9,
    url : "https://images.unsplash.com/photo-1642251732274-0dc075b00d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    title: "Camera Wallpaper"
  },
];

function App() {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  // The function downloads the wallpaper when triggered.
  const downloadWallpaper = (url, filename = 'wallpaper.jpg') => {
    // sends the GET request to download the wallpaper from given URL.
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
    // response.blob() : convert the response into binary large object.
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        //  The blob is turned into a downloadable object using URL.createObjectURL.
        const urlObject = URL.createObjectURL(blob);
        link.href = urlObject;
        link.download = filename;
        document.body.appendChild(link); // Append link to the body
        link.click(); // Trigger download
        URL.revokeObjectURL(urlObject); // Clean up URL object
        document.body.removeChild(link); // Remove link from the body
      })
      .catch(error => console.error('Download failed', error));
  };
  

  // Function to handle wallpaper selection
  // This function is passed down to the WallpaperCard component and called when a wallpaper is clicked.
  const handleWallpaperClick = (wallpaper) => {
    setSelectedWallpaper(wallpaper); // Update the selected wallpaper
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Wallpaper Gallery</h1>

      {/* If a wallpaper is selected, show it in a larger view */}
      {selectedWallpaper && (
        <div className="selected-wallpaper mb-5 text-center">
          <h2>{selectedWallpaper.title}</h2>
          <img
            src={selectedWallpaper.url}
            alt={selectedWallpaper.title}
            className="img-fluid mb-3"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <button
            className="btn btn-success"
            onClick={() => downloadWallpaper(selectedWallpaper.url)}
          >
            Download Selected Wallpaper
          </button>
        </div>
      )}

      <div className="row">
        {wallpapers.map((wallpaper) => (
          <div key={wallpaper.id} className="col-md-4">
            <WallpaperCard
              wallpaper={wallpaper}
              downloadWallpaper={downloadWallpaper}
              onWallpaperClick={handleWallpaperClick} // Pass the click handler to WallpaperCard
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


