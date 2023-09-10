import React, { useEffect, useState } from 'react';
import axios from 'axios';
import serviceAccountKey from "./zenbauhaus-9543ed248bdc.json"; 

const ArtPage: React.FC = () => {
    const [photos, setPhotos] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Authenticate using the service account key
        axios.post('https://www.googleapis.com/oauth2/v4/token', {
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: serviceAccountKey,
        })
        .then(response => {
            const accessToken = response.data.access_token;

            // Use the access token to fetch Google Photos data
            axios.get('https://photoslibrary.googleapis.com/v1/mediaItems', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                params: {
                    pageSize: 10, // Adjust as needed
                },
            })
            .then(response => {
                setPhotos(response.data.mediaItems);
            })
            .catch(error => {
                setError('Error fetching Google Photos data'); // Set an error message
                console.error('Error fetching Google Photos data:', error);
            });
        })
        .catch(error => {
            setError('coming soon...'); // Set an error message
            console.error('Error authenticating with service account:', error);
        });
    }, []);

    return (
        <div>
          <div className="profile-container">
            <br/><h1>Photos</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {photos.map(photo => (
                        <li key={photo.id}>
                            <img src={photo.baseUrl} alt={photo.filename} />
                        </li>
                    ))}
                </ul>
            )}
        </div></div>
    );
};

export default ArtPage;
