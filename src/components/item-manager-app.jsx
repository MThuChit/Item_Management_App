import "./item-manager-app.css"

import { useState, useRef } from "react";

import deleteLogo from '../assets/delete.svg';
import stationaryLogo from '../assets/ink_pen.svg';
import kitchenwareLogo from "../assets/flatware.svg";
import applianceLogo from "../assets/electrical_services.svg";

function ItemManager () {
    const Name = [
        { id: 1, name: "Stationery", logo: stationaryLogo },
        { id: 2, name: "Kitchenware", logo: kitchenwareLogo },
        { id: 3, name: "Appliances", logo: applianceLogo },
    ];

    const categories = Name;


  /*
   * !!! IMPORTANT !!!
   * - You MUST use the given states and refs in your code.
   * - You MAY add additional state, refs, and variables if needed.
   */
    


    const [items, setItems] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

  // You must use this ref for the item name input


    const itemName = useRef(null);
    const itemCategory = useRef(null);
    const itemPrice = useRef(null);
    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
        }
  

  //TODO: Your code goes here
  /*
   * !!! IMPORTANT !!!
   * - Implement your output based on the given sample layout.
   * - The id and className attributes below MUST be preserved.
   * - Your CSS MUST use the existing id and className selectors.
   */

    

  return (
    <>
      <div id="h1">
        Item Management
      </div>
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
            {

                /*
              * TODO: Your code goes here
              * !!! IMPORTANT !!!
              * - All items must be listed here (above the form row).
              * - Your input form must be implemented as the LAST row in this table.
              */
              items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{categories.find(cat => cat.id === item.categoryId)?.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDeleteItem(item.id)}>
                      <img src="/assets/delete.svg" alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))
            }
            {
              <tr>
                <td></td>
                <td>
                  <input type="text" ref={itemName} placeholder="Name" />
                </td>
                <td>
                  <select ref={itemCategory}>
                    {Name.map(cat => (
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
              }
          </tbody>
        </table>
      </div>
      <div id="error-message">
         {
           /* You MUST display the errorMsg state here. */
           errorMsg && <p>{errorMsg}</p>
         }
      </div>
    </>
  );
}

export default ItemManager