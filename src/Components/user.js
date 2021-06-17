import React, { useState, useEffect } from "react";
import listItems from './fakeData/listItems.json'
import unpinned from './fakeData/unpinnedCard.json'
import pinned from './fakeData/pinnedCard.json'
import AvatarMaker from '../images/AvatarMaker.png'

const User = () => {
    const [items, setItems] = useState([]);
    const [unpinnedCards, setUnpinnedCard] = useState([]);
    const [pinnedCards, setPinnedCard] = useState([]);

    useEffect(() => {
       setItems(listItems)
    }, []);
    
    useEffect(() => {
      setUnpinnedCard(unpinned)
    }, []);
    
    useEffect(() => {
      setPinnedCard(pinned)
    }, []);
    
    
  return (
    <div class="container mx-auto">
    <section class="user-info bg-gray-300 p-6 mb-8 container grid grid-flow-row auto-rows-max rounded-md">
      <div className="user-details mb-8 flex ">
        <div className="w-1/5 mr-3">
            <img src={AvatarMaker} alt="avatar" />
        </div>
        
        <div className="w-4/5 bg-white p6 rounded-md">
            <h2>user</h2>
        </div>

      </div>
      <div class="pinned-card-area bg-red ">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
     {
        pinnedCards.map(pinitem =>(
    <li x-for="item in items">
      <a href="item.url" class="shadow-xl hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white">
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start h-40 ">
          <div class="">
            <dt class="sr-only">Title</dt>
            <dd class="text-left group-hover:text-pink leading-6 font-medium text-pink-600">
            {pinitem.title}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="text-left group-hover:text-light-blue-200 text-sm font-medium text-lg sm:mb-4 lg:mb-0 xl:mb-4">
              {pinitem.desc}
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
      <section class="unpinned-card-area">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
     {
        unpinnedCards.map(unpinitem =>(
    <li x-for="item in items">
      <a href="item.url" class="shadow-md hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white">
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start h-40">
          <div class="">
            <dt class="sr-only">Title</dt>
            <dd class="text-left group-hover:text-pink leading-6 font-medium text-pink-600">
            {unpinitem.title}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="text-left group-hover:text-light-blue-200 text-sm font-medium text-lg sm:mb-4 lg:mb-0 xl:mb-4">
              {unpinitem.desc}
            </dd>
          </div>
       
        </dl>
      </a>
    </li>
       ))
    } 
    </ul>
      </section>
    <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
     <div >
     <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     {
        items.map(item =>(
    <li x-for="item in items ">
      <a href="item.url" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border-gray-300 border bg-white">
        <dl class="h-24 grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start ">
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
  </div>
  );
};

export default User;
