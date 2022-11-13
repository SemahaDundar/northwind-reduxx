import React from "react";
import SelectInput from "../../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({categories, product, onSave, onChange, errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        valeu={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="category"
        valeu={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category=>({
            value:category.id,
            text:category.categoryName
        }))}

        onchange={onChange}
        error={errors.categoryId}
      />
 
        <TextInput
        name="unitPrice"
        label="unitPrice"
        valeu={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
          <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        valeu={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
          <TextInput
        name="unitsInStock"
        label="Product Name"
        valeu={product.UnitsInStock}
        onChange={onChange}
        error={errors.UnitsInStock}
      />

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
