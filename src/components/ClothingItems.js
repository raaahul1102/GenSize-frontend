import React from 'react';

const ClothingItems = ({ items }) => {
    // Fallback to empty array if items is undefined or null
    const clothingItems = items || [];

    return (
        <div>
            <h2>Available Clothing Items</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {clothingItems.length > 0 ? (
                    clothingItems.map((item, index) => (
                        <div key={index} style={{ flex: '1 1 calc(33.333% - 20px)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', textAlign: 'center', backgroundColor: '#fff' }}>
                            <img src={item.src} alt={item.name} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{item.name}</p>
                        </div>
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </div>
        </div>
    );
};

export default ClothingItems;

