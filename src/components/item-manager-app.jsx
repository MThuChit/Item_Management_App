import "./item-manager-app.css";
import { useState, useRef } from "react";

import deleteLogo from '../assets/delete.svg';
import stationaryLogo from '../assets/ink_pen.svg';
import kitchenwareLogo from "../assets/flatware.svg";
import applianceLogo from "../assets/electrical_services.svg";

function ItemManager() {
  const categories = [
    { id: 1, name: "Stationery", logo: stationaryLogo },
    { id: 2, name: "Kitchenware", logo: kitchenwareLogo },
    { id: 3, name: "Appliances", logo: applianceLogo },
  ];

  const [items, setItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const itemName = useRef(null);
  const itemCategory = useRef(null);
  const itemPrice = useRef(null);

  const handleAddItem = () => {
    const name = itemName.current.value.trim();
    const categoryId = parseInt(itemCategory.current.value);
    const price = parseFloat(itemPrice.current.value);

    // Basic Validation
    if (!name || isNaN(price)) {
      setErrorMsg("Please enter a valid name and price.");
      return;
    }

    const newItem = {
      id: items.length + 1,
      name: name,
      categoryId: categoryId,
      price: price.toFixed(2)
    };

    setItems([...items, newItem]);
    setErrorMsg("");

    
    itemName.current.value = "";
    itemPrice.current.value = "";
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <div id="h1">Item Management</div>
      <div id="data-area">
        <table id="item-table" className="item-table">
          <thead>
            <tr>
              <th id="col-item-id">ID</th>

              <th id="col-item-name">Name</th>
              <th id="col-item-category">Category</th>
              <th id="col-item-price">Price</th>
              <th id="col-item-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const cat = categories.find(c => c.id === item.categoryId);
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={cat?.logo} alt={cat?.name} width="20" /> {cat?.name}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleDeleteItem(item.id)}>
                      <img src={deleteLogo} alt="Delete" width="16" />
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>

              </td>
              <td>
                <input type="text" ref={itemName} placeholder="Name" />
              </td>
              <td>
                <select ref={itemCategory}>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </td>
              <td>
                <input type="number" ref={itemPrice} placeholder="Price" />
              </td>
              <td>
                <button onClick={handleAddItem}>Add Item</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="error-msg"> {/* Matching CSS id */}
        {errorMsg}
      </div>
    </>
  );
}

export default ItemManager;