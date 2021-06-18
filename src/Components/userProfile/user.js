import React, { useState, useEffect } from "react";
import listItems from '../fakeData/listItems.json'
import pinned from '../fakeData/pinnedCard.json'
import AvatarMaker from '../../images/AvatarMaker.png'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import './user.css'

const User = () => {
  const keywords = [
    {
      id:1,
      title: "Defi",
    },
    {
      id:2,
      title: "Adventure",
    },
    {
      id:3,
      title: "Bitcoin mining",
    },
    {
      id:4,
      title: "Flutter",
    },
    {
      id:5,
      title: "Solidity",
    },
    {
      id:6,
      title: "Web development",
    },
    {
      id:7,
      title: "Machine Learning",
    }
  ]

  const social_links =[
    {
      id:8,
      slink:<FaFacebook />
    },
    {
      id:9,
      slink:<FaTwitter />
    },
    {
      id:10,
      slink:<FaLinkedin />
    },
    {
      id:11,
      slink:<FaTwitch />
    }
  ]
    const [items, setItems] = useState([]);
    //const [unpinnedCards, setUnpinnedCard] = useState([]);
    const [pinnedCards, setPinnedCard] = useState([]);

    useEffect(() => {
       setItems(listItems)
    }, []);
    
   
    
    useEffect(() => {
      setPinnedCard(pinned)
    }, []);
    
    
  return (
    <div className="container mx-auto">
      <section className="user-info">
      <div className="user-details mb-8 flex ">
        <div className="w-1/5 mr-10 avatar">
            <img src={AvatarMaker} alt="avatar" />
            <p className="sms font-medium text-blue-700">Send a message</p>
        </div>
        
        <div className="w-4/5 h-2/3 self-center flex bg-white p-4 rounded-md">
          <div className="user w-2/5">
          <div className="user-title">
              <h3 className="text-2xl font-bold">Code Alpha_</h3>
              <p className="text-sm text-gray-400">Palo Alto, San Francisco</p>
          </div>
          <div className="user-position">
            <h4 className="mt-4"><strong>Currently</strong> UX Design Intern, Minority Programmers</h4>
          </div>
          </div>
           
          <div className="user-social flex justify-end  flex-wrap w-3/5  ">
            <div className="keywords">
                <p className="flex justify-end  flex-wrap">
                  {
                   keywords.map((keyword) =>( <a href="/" key={keyword.id} className="inline-block px-2 py-1 mr-2 border-gray-500 mb-1 rounded-md border">{keyword.title}</a>)) 
                  }
                </p>
            </div>
            <div className="social-link float-right mt-5">
              <p className="flex self-center">
                <strong>Follow me</strong>
                {
                  social_links.map(link=>(<a className="social" key={link.id} href="/">{link.slink}</a>))
                }
                
              </p>

            </div>
          </div>
        </div>
      </div>

      </section>
    <section className="   mb-8 container ">
      <h2 className="text-xl font-bold mb-3">Highlights</h2>
      <div className="pinned-card-area p-6 bg-gray-300 grid grid-flow-row auto-rows-max rounded-md">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
     {
        pinnedCards.map(pinitem =>(
    <li x-for="item in items" key={pinitem.id}>
      <a href="item.url" className="shadow-xl hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white">
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start h-36 ">
          <div className="">
            <div className="text-left leading-6 text-sm flex font-medium text-current">
            <span className={`circle ${pinitem.base}`}></span>{pinitem.title}
            </div>
          </div>
          <div>
            <div className="text-left font-semibold mt-8 text-xl sm:mb-4 lg:mb-0 xl:mb-4">
              {pinitem.desc}
             
            </div>
            <div className="text-left text-sm font-medium text-gray-500 sm:mb-4 lg:mb-0 xl:mb-4">
            {pinitem.desc2}
            </div>
          </div>
       
        </dl>
      </a>
    </li>
       ))
    } 
    </ul>
      </div>
      </section>

    <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
     <div >
     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     {
        items.map(item =>(
    <li x-for="item in items " key={item.id}>
      <a href="item.url" className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border-gray-300 border bg-white">
        <dl className="h-24 grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start ">
          <div className="">
            <dt className="sr-only">Title</dt>
            <dd className="text-left group-hover:text-pink leading-6 font-medium text-pink-600">
            {item.title}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Category</dt>
            <dd className="text-left group-hover:text-light-blue-200 text-sm font-medium text-lg sm:mb-4 lg:mb-0 xl:mb-4">
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
