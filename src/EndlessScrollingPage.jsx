import React, { useState, useEffect } from 'react';
import './App.css';

function EndlessScrollingPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
            const newData = await response.json();
            if (newData.length > 0) {
                setData(prevData => [...prevData, ...newData]);
                setPage(prevPage => prevPage + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
            !loading &&
            hasMore
        ) {
            fetchData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="container">
            <hr />
            <h1>Infinite Scroll Products</h1>
           
            {data.map((item, index) => (
                <div key={index} className="item-card">
                    <img className="item-image" src={item.images} alt="" />
                    <div className="item-details">
                        <div>Type: {item.category.name}</div>
                        <div>Product: {item.title}</div>
                        <div>Price: {item.price}</div>
                    </div>
                </div>
            ))}
            {loading && <div>Loading...</div>}
            {!hasMore && <div>No more items to load</div>}
        </div>
    );
}

export default EndlessScrollingPage;
