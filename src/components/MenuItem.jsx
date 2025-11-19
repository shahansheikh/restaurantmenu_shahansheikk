import React from 'react'

export default function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-card">
      <div className="menu-card-header">
        <h3 className="menu-name">{name}</h3>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>
      <p className="menu-category">{category} • ${price.toFixed(2)}</p>
      <p className="menu-desc">{description}</p>
    </article>
  );
}
