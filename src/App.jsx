import React from 'react'
import MenuItem from './components/MenuItem'

const mainCourses = [
  {
    id: 'mc1',
    name: 'Grilled Herb Chicken',
    category: 'Main Course',
    price: 12.99,
    description: 'Juicy chicken grilled with fresh herbs, served with roasted potatoes.',
    isVegetarian: false
  },
  {
    id: 'mc2',
    name: 'Penne Arrabbiata',
    category: 'Main Course',
    price: 10.50,
    description: 'Classic spicy tomato sauce with penne and parmesan.',
    isVegetarian: true
  },
  {
    id: 'mc3',
    name: 'Seared Salmon',
    category: 'Main Course',
    price: 15.25,
    description: 'Pan-seared salmon with lemon butter and seasonal vegetables.',
    isVegetarian: false
  },
  {
    id: 'mc4',
    name: 'Vegetable Stir-Fry Bowl',
    category: 'Main Course',
    price: 9.75,
    description: 'Stir-fried seasonal vegetables with soy-ginger glaze over rice.',
    isVegetarian: true
  }
];

const desserts = [
  {
    id: 'd1',
    name: 'Molten Chocolate Cake',
    category: 'Dessert',
    price: 6.50,
    description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',
    isVegetarian: true
  },
  {
    id: 'd2',
    name: 'Classic Tiramisu',
    category: 'Dessert',
    price: 6.00,
    description: 'Espresso-soaked ladyfingers layered with mascarpone cream.',
    isVegetarian: true
  },
  {
    id: 'd3',
    name: 'Lemon Tart',
    category: 'Dessert',
    price: 5.75,
    description: 'Zesty lemon curd in a buttery crust topped with whipped cream.',
    isVegetarian: true
  }
];

export default function App() {
  const totalItems = mainCourses.length + desserts.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <header className="header">
        <h1>Delicious Bites</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <section className="menu-section">
        <h2>Main Courses</h2>
        <div className="list-grid">
          {mainCourses.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              description={item.description}
              isVegetarian={item.isVegetarian}
            />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Desserts</h2>
        <div className="list-grid">
          {desserts.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              description={item.description}
              isVegetarian={item.isVegetarian}
            />
          ))}
        </div>
      </section>

      <aside className="info-box">
        <h3>Restaurant Info</h3>
        <p>Total items on menu: <strong>{totalItems}</strong></p>
        <p>Open Daily: 11 AM - 10 PM</p>
        <p>Contact: +1 (555) 123-4567 | 123 Flavor St, Foodtown</p>
      </aside>

      <footer className="footer">
        <p>Delicious Bites • <a href="mailto:info@deliciousbites.example">info@deliciousbites.example</a></p>
        <p>© {currentYear} Delicious Bites</p>
      </footer>
    </div>
  );
}
