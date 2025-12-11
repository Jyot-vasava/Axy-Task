import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Use environment variable for API key
      const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
      
      if (!apiKey) {
        throw new Error("API key is missing. Please check your environment configuration.");
      }
      
      // Use proxy endpoint to avoid CORS issues
      const encodedQuery = encodeURIComponent(query);
      const url = `/api/giphy/v1/gifs/search?q=${encodedQuery}&api_key=${apiKey}&limit=12`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Invalid API key. Please check your API key configuration.");
        } else if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please wait before making another request.");
        } else {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
      }
      
      const data = await response.json();
      setGifs(data.data);
      
      // Show message if no results found
      if (data.data.length === 0) {
        setError("No GIFs found for your search. Try a different term.");
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching GIFs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container mt-8 p-4 max-w-4xl mx-auto">
      <div className="search-input-group flex gap-2 mb-4">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for GIFs" 
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSearch} 
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 transition-colors"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      {error && (
        <div className="error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}
      
      <div 
        id="gifsContainer" 
        className="gifs-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
      >
        {gifs.map((gif) => (
          <div key={gif.id} className="gif-item bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={gif.images.fixed_height.url} 
              alt={gif.title} 
              className="w-full h-auto object-cover"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600 truncate">{gif.title || 'Untitled GIF'}</p>
            </div>
          </div>
        ))}
        
        {gifs.length === 0 && !loading && !error && (
          <div className="col-span-full text-center py-8 text-gray-500">
            Enter a search term to find GIFs
          </div>
        )}
        
        {loading && (
          <div className="col-span-full text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading GIFs...</p>
          </div>
        )}
      </div>
    </div>
  );
}