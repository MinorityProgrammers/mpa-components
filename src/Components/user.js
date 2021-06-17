import React, { useState, useEffect } from "react";
import listItems from './fakeData/listItems.json'


const User = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
       setItems(listItems)
    }, []);
    console.log(listItems)
  return (
    <>
    <section class="user-info">
      <div class="user-info-top">
        <div class="user-avatar">
          <img src="" alt="" />
        </div>
        <div class="user-details">

        </div>
      </div>
      <div class="pinned-card-area">

      </div>
    </section>
    <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
     <div >
     <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     {
        items.map(item =>(
    <li x-for="item in items">
      <a href="item.url" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start">
          <div class="">
            <dt class="sr-only">Title</dt>
            <dd class="text-left group-hover:text-pink leading-6 font-medium text-pink-600">
            {item.title}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="text-left group-hover:text-light-blue-200 text-sm font-medium text-lg sm:mb-4 lg:mb-0 xl:mb-4">
              {item.category}
            </dd>
          </div>
       
        </dl>
      </a>
    </li>
       ))
    } 
    </ul>
     </div>
    </section>
  </>
  );
};

export default User;
