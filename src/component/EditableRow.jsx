import React from "react";

export const EditableRow = ({
  index,
  editFormData,
  handleEditFormChange,
  handleCancleClick,
}) => {
  return (
    <tr key={index}>
      <td>
        <input
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          onChange={handleEditFormChange}
          value={editFormData.fullName}
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter address..."
          name="address"
          onChange={handleEditFormChange}
          value={editFormData.address}
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter phone Number..."
          name="phoneNumber"
          onChange={handleEditFormChange}
          value={editFormData.phoneNumber}
        />
      </td>
      <td>
        <input
          type="email"
          required
          placeholder="Enter Email..."
          name="email"
          onChange={handleEditFormChange}
          value={editFormData.email}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="submit" onClick={(e) => handleCancleClick}>
          Cancle
        </button>
      </td>
    </tr>
  );
};
