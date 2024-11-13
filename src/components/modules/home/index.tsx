"use client";
import React, { useState } from "react";
import { FcContacts, FcDiploma1, FcDiploma2 } from "react-icons/fc";
import "./style.scss";
import Link from "next/link";
import { TbAlbum, TbBuildingBank } from "react-icons/tb";
import HomeHeader from "./header";
import HomeFooter from "./footer";

const HomeComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const homeArrayItems = [
    {
      id: 1,
      icon: <TbAlbum className="icon" />,
      title: "Register",
      items: [
        {
          icon: <FcDiploma1 className="icon" />,
          name: "Birth Registration",
          url: "/registration/birth",
          live: true,
        },
        {
          icon: <FcContacts className="icon" />,
          name: "Death Registration",
          url: "/registration/death",
          live: true,
        },
      ],
    },
    {
      id: 2,
      icon: <TbBuildingBank className="icon" />,
      title: "Citizens",
      items: [
        {
          icon: <FcDiploma2 className="icon" />,
          name: "Indigenization",
          url: "/registration/indigenization",
          live: true,
        },
      ],
    },
  ];

  return (
    <> 
    <HomeHeader />
    <section className="home">
      <nav>
        {homeArrayItems.map((category) => (
          <div
            key={category.id}
            className={`home__category ${
              selectedCategory === category.id ? "home__category-selected" : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span>{category.icon}</span>
            <h2>{category.title}</h2>
          </div>
        ))}
      </nav>

      <div className="home__items-container">
        {homeArrayItems.map((category) => (
          <div
            key={category.id}
          >
            {selectedCategory === category.id && (
              <ul className="home__items">
                {category.items.map((item, index) => (
                  <li key={index} className="home__item">
                    <Link
                      href={item.url}
                      className={item.live ? "live" : "inactive"}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
    <HomeFooter />
    </>
   
  );
};

export default HomeComponent;
