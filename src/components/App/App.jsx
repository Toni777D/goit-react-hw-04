import { useState, useEffect } from 'react';
import { getPhotos } from '../../apiService/photos'
import SearchBar from '../SearchBar/SearchBar'
import Loader from '../Loader/Loader'


export default function App(){
const [query, setQuery] = useState('');
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [total, setTotal] = useState(49);
const [error, setError] = useState(null);

    const onSubmit = async (newQuery) => {
        setQuery(newQuery);
        setImages([]);
        setPage(1);
      };

    //   const handleLoadMore = () => {
    //     setPage(page + 1);
    //   };

    useEffect(() => { 
        if (!query) return; 
        setIsLoading(true);
        const getImages = async () => {
            try {
                const {photos, total_results } = await getPhotos(query, page);
                setImages(prev => [...prev, ...photos]);
                setTotal(total_results); 
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        };
        getImages();
    }, [query, page]);

    return(
        <div>
            <SearchBar onSubmit={onSubmit}/>
            {isLoading && <Loader/>}
            {error && <p>{error}</p>}
            {/* <ErrorMessage/> */}
            {/* <ImageGallery/> */}
            {/* <ImageModal/> */}
            {/* <LoadMoreBtn/> */}
        </div>
    )
}