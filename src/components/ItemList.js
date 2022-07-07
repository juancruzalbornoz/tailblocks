import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {items.map((item) => <Item key={item.id} item={item} />)}
        </div>
      </div>
    </section>
    )
}

export default ItemList;