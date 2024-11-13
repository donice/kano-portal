import React from 'react'
import "./style.scss"

const HomeFooter = () => {
  const footerArray = [
    {
      title: "Infant Birth Registration",
      description: "Through this service, you can register an Infant Birth Registration",
      path: "/",
    },
    {
      title: "Death Registration",
      description: "Through this service, you can register an Death Registration",
      path: "/",
    },
    {  title: "Local Government Of Origin",
      description: "Through this service, you can register an Cerificate of Local Government of Origin",
      path: "/",
    },
  ]

  return (
    <div className="footer-container">
      <h2>Explore more</h2>
      <div className="footer-scroll">
        {footerArray.map((item, index) => (
          <div className="footer-card bg-gradient-to-r from-indigo-50 from-10% via-teal-50 via-40% to-teal-300 to-90%" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.path}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFooter;