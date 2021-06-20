import React, { useState, useEffect } from "react";
import listItems from "../fakeData/listItems.json";
import pinned from "../fakeData/pinnedCard.json";
import unpinned from "../fakeData/unpinnedCard.json";
import AvatarMaker from "../../images/AvatarMaker.png";
import star1g from "../../images/star1g.png";
import star1 from "../../images/star1.png";
import star2 from "../../images/star2.png";
import star2b from "../../images/star2b.png";
import star3 from "../../images/star3.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { HiOutlinePencil} from "react-icons/hi";
import "./profilePage.css";

const Profile = () => {
  const keywords = [
    {
      id: 1,
      title: "Defi",
    },
    {
      id: 2,
      title: "Adventure",
    },
    {
      id: 3,
      title: "Bitcoin mining",
    },
    {
      id: 4,
      title: "Flutter",
    },
    {
      id: 5,
      title: "Solidity",
    },
    {
      id: 6,
      title: "Web development",
    },
    {
      id: 7,
      title: "Machine Learning",
    },
  ];

  const brands = [
    {
      id: 18,
      brand_img: star1g,
    },
    {
      id: 19,
      brand_img: star1,
    },
    {
      id: 20,
      brand_img: star2,
    },
    {
      id: 21,
      brand_img: star2b,
    },
    {
      id: 22,
      brand_img: star3,
    },
  ];
  const social_links = [
    {
      id: 8,
      slink: <FaFacebook style={{ fill: "url(#pink-gradient)" }} />,
    },
    {
      id: 9,
      slink: <FaTwitter style={{ fill: "url(#pink-gradient)" }} />,
    },
    {
      id: 10,
      slink: <FaLinkedin style={{ fill: "url(#pink-gradient)" }} />,
    },
    {
      id: 11,
      slink: <FaTwitch style={{ fill: "url(#pink-gradient)" }} />,
    },
    {
      id: 23,
      slink: <HiOutlinePencil/>
    }
  ];
  const [items, setItems] = useState([]);
  const [pinnedCards, setPinnedCard] = useState([]);
  const [unpinnedCards, setUnpinnedCard] = useState([]);
  useEffect(() => {
    setItems(listItems);
  }, []);

  useEffect(() => {
    setPinnedCard(pinned);
  }, []);

  useEffect(() => {
    setUnpinnedCard(unpinned);
  }, []);

  return (
    <div className="container mx-auto">
      <svg width="1em" height="1em">
        <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF00B8" offset="0%" />
          <stop stopColor="#FF655B" offset="50.8%" />
          <stop stopColor="#FFC700" offset="100%" />
        </linearGradient>
      </svg>

      <section className="user-info bg-gray-300 rounded-xl">
        <div className="user-details mb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 p-5 gap-4">
          <div className=" avatar-area ">
            <div className="avatar">
              <img className="object-contain" src={AvatarMaker} alt="avatar" />
              <div className="avatar-btn rounded-xl">
                <p className="avatar-img text-lg font-medium ">
                  <a href="/"> Generate Avatar</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 ">
            <div className="flex bg-white p-4 rounded-md">
              <div className="user w-2/5">
                <div className="user-title">
                  <h3 className="text-2xl font-bold">
                    Code Alpha_{" "}
                    <small className="font-medium text-gray-300 text-base">
                      @codealpha
                    </small>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Palo Alto, San Francisco
                  </p>
                  <h4 className="mt-2 font-medium">
                    UX Design Intern, Minority Programmers
                  </h4>
                </div>

                <div className="keywords mt-5">
                  <p className="flex justify-start  flex-wrap">
                    {keywords.map((keyword) => (
                      <a
                        href="/"
                        key={keyword.id}
                        className="inline-block px-2 py-1 mr-2 border-gray-500 mb-1 rounded-md border"
                      >
                        {keyword.title}
                      </a>
                    ))}
                  </p>
                </div>
                <div className="logo-brand mt-4">
                  <p className="flex justify-start  flex-wrap">
                    {brands.map((brand) => (
                      <a
                        href="/"
                        key={brand.id}
                        className="inline-block p-1 mr-1"
                      >
                        <img src={brand.brand_img} alt="star" />
                      </a>
                    ))}
                  </p>
                </div>
              </div>
              <div className="user-social w-3/5">
                <div className=" ">
                  <p className="social-link">
                    {social_links.map((link) => (
                      <a key={link.id} href="/">
                        {" "}
                        <span className="social">{link.slink}</span>{" "}
                      </a>
                    ))}
                  </p>
                </div>
                <div className="headline">
                  <div className="add-headline">
                    <p className="text-blue-700 text-lg">
                      <a href="/">Add fassion Headline </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pinned-card-area p-6  grid grid-flow-row auto-rows-max rounded-md">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {pinnedCards.map((pinitem) => (
              <li x-for="item in items" key={pinitem.id}>
                <a
                  href="item.url"
                  className="shadow-xl hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white"
                >
                  <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start h-36 ">
                    <div className="">
                      <div className="text-left leading-6 text-sm flex font-medium text-current">
                        <span className={`circle ${pinitem.base}`}></span>
                        {pinitem.title}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-left font-semibold mt-8 text-xl sm:mb-4 lg:mb-0 xl:mb-4">
                        {pinitem.desc}
                      </h3>
                      <p className="text-left text-sm font-medium text-gray-500 sm:mt-0 lg:mt-0 xl:mt-0">
                        {pinitem.desc2}
                      </p>
                    </div>
                  </dl>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="   mb-8 container ">
        <div className="unpinned-card-area p-6  grid grid-flow-row auto-rows-max rounded-md">
          <h2 className="text-xl font-bold mb-3">Highlights</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {unpinnedCards.map((unpinitem) => (
              <li x-for="item in items" key={unpinitem.id}>
                <a
                  href="item.url"
                  className="shadow-xl hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white"
                >
                  <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-start h-36 ">
                    <div className="">
                      <div className="text-left leading-6 text-sm flex font-medium text-current">
                        <span className={`circle ${unpinitem.base}`}></span>
                        {unpinitem.title}
                      </div>
                    </div>
                    <div>
                      <div className="text-left font-semibold mt-8 text-xl sm:mb-4 lg:mb-0 xl:mb-4">
                        {unpinitem.desc}
                      </div>
                    </div>
                  </dl>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((item) => (
              <li x-for="item in items " key={item.id}>
                <a
                  href="item.url"
                  className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border-gray-300 border bg-white"
                >
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
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;
