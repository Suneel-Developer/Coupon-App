import React, { useState } from "react";
import Modal from "../../components/Model";
import "./admin.css";

const Admin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="admin_container">
      <div>
        <button
          className="addbutton"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Coupon
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>

      <div className="tabelContainer">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Store</th>
              <th>Title</th>
              <th>Description</th>
              <th>Valid Date</th>
              <th>Tags</th>
              <th>Image</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button>Adit</button> <button>Delete</button></td>
              <td>ABC Pharmacy</td>
              <td>10% off Vitamins</td>
              <td>
                0% off any vitamins when using the 'Tarjeta de la Familia' card
                on your next purchase.
              </td>
              <td>06/01/2023</td>
              <td>Pharmacy</td>
              <td>mg.png</td>
              <td>URL</td>
            </tr>
            <tr>
            <td><button>Adit</button> <button>Delete</button></td>
              <td>ABC Pharmacy</td>
              <td>10% off Vitamins</td>
              <td>
                0% off any vitamins when using the 'Tarjeta de la Familia' card
                on your next purchase.
              </td>
              <td>06/01/2023</td>
              <td>Pharmacy</td>
              <td>mg.png</td>
              <td>URL</td>
            </tr>
            <tr>
            <td><button>Adit</button> <button>Delete</button></td>
              <td>ABC Pharmacy</td>
              <td>10% off Vitamins</td>
              <td>
                0% off any vitamins when using the 'Tarjeta de la Familia' card
                on your next purchase.
              </td>
              <td>06/01/2023</td>
              <td>Pharmacy</td>
              <td>mg.png</td>
              <td>URL</td>
            </tr>
            <tr>
            <td><button>Adit</button> <button>Delete</button></td>
              <td>ABC Pharmacy</td>
              <td>10% off Vitamins</td>
              <td>
                0% off any vitamins when using the 'Tarjeta de la Familia' card
                on your next purchase.
              </td>
              <td>06/01/2023</td>
              <td>Pharmacy</td>
              <td>mg.png</td>
              <td>URL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
