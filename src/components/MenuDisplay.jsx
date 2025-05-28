import React from 'react';
import './MenuDisplay.css';

const MenuDisplay = () => {
  return (
    <div className="menu-display">
      <h1 className="menu-title">The Menu</h1>

      <nav className="menu-tabs">
        <span className="menu-tab active">Breakfast</span>
        <span className="menu-tab">Lunch</span>
        <span className="menu-tab">Dinner</span>
        <span className="menu-tab">Snacks</span>
        <span className="menu-tab">Drinks</span>
      </nav>

      <div className="menu-body">
        <div className="menu-row">
          <div className="menu-column">
            <h3 className="menu-heading">Appetizer</h3>
            <div className="menu-item">
              <div className="item-title">Potato Salad <span className="item-price">$25</span></div>
              <div className="item-description">Mix Green Veggie, Potato, Mayonnaise, Sesame</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Cream Mushroom Soup <span className="item-price">$30</span></div>
              <div className="item-description">Creamy Mushroom Paste With Garlic Bread</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Caesar Salad <span className="item-price">$35</span></div>
              <div className="item-description">Mix Lettuce, Eggs, Shredded Chicken With Garlic Bread</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Chicken Quesadillas <span className="item-price">$45</span></div>
              <div className="item-description">Wrapping Tender Chicken With Cheese & Veggie</div>
            </div>
          </div>

          <div className="menu-column">
            <h3 className="menu-heading">Main Course</h3>
            <div className="menu-item">
              <div className="item-title">Aglio Olio <span className="item-price">$42</span></div>
              <div className="item-description">Olive Oil, Mushroom Champignon</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Codon Bleu <span className="item-price">$45</span></div>
              <div className="item-description">Chicken Breast Fillet, Smoked Beef, Mozzarella Cheese</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Shredded Beef Burger <span className="item-price">$49</span></div>
              <div className="item-description">Aus Beef Sliced With Cheese</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Salmon Marinara <span className="item-price">$52</span></div>
              <div className="item-description">Salmon Fillet With Special Marinara Sauce</div>
            </div>
          </div>
        </div>

        <div className="menu-row">
          <div className="menu-column">
            <h3 className="menu-heading">Drink</h3>
            <div className="menu-item">
              <div className="item-title">Mineral Water <span className="item-price">$10</span></div>
              <div className="item-description">Premium Mineral Water</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Fruit Juice <span className="item-price">$15</span></div>
              <div className="item-description">Mix Berry Juice</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Apple Cranberry Fritz <span className="item-price">$17</span></div>
              <div className="item-description">Cranberry Juice, Soda, Vodka</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Cold Brew Chocolate Martini <span className="item-price">$20</span></div>
              <div className="item-description">Cold Brew, Chocolate, Whipped Cream</div>
            </div>
          </div>

          <div className="menu-column snack-highlight">
            <h3 className="menu-heading">Snack</h3>
            <div className="menu-item">
              <div className="item-title">French Fries <span className="item-price">$10</span></div>
              <div className="item-description">Potato Fries With Seasoning</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Truffle Parmesan Fries <span className="item-price">$20</span></div>
              <div className="item-description">Truffle Mushroom With Parmesan Cheese</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Chicken Wing <span className="item-price">$25</span></div>
              <div className="item-description">Crispy Chicken Wing With Spicy Sauce</div>
            </div>
            <div className="menu-item">
              <div className="item-title">Calamary Chips <span className="item-price">$30</span></div>
              <div className="item-description">Crispy Squid With Mayonnaise and Lemon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDisplay;
