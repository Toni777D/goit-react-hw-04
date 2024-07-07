// import styles from './SearchBar.module.css'
import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast('Please write text for search image');

export default function SearchBar({onSubmit}){
    const [query, setQuery] = useState('')
    const handleChange = event => {
        setQuery(event.target.value);
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        onSubmit(query);
        setQuery('');
    }
    return (
<div>
<header>
  <form onSubmit={handleFormSubmit}>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={handleChange}
      value={query}
    />
    <button type="submit" onSubmit={notify}>Search</button>
  </form>
</header>

</div>
    )
}