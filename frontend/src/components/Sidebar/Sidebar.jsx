import React from "react";
import { MdWaterDrop } from "react-icons/md";
import { FaBasketballBall } from "react-icons/fa";
import { LuUtensils } from "react-icons/lu";
import { RiBookShelfLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const icons = [
    {
      icon: <MdWaterDrop size={24} />,
      label: "Hidratação",
      path: "/water",
    },
    {
      icon: <FaBasketballBall size={24} />,
      label: "Exercício",
      path: "/workout",
    },
    {
      icon: <LuUtensils size={24} />,
      label: "Alimentação",
      path: "/food",
    },
    {
      icon: <RiBookShelfLine size={24} />,
      label: "Estudo",
      path: "/study",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        background: "#70e000",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {icons.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            title={item.label}
            style={{
              color: "#000", // Changed from white to black for better contrast
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#e4e4e480";
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {item.icon}
          </Link>
        ))}
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <Link
          to="/ajuda"
          title="Ajuda"
          style={{ color: "#000", textDecoration: "none" }}
        >
          ?
        </Link>
        <Link
          to="/sair"
          title="Sair"
          style={{ color: "#000", textDecoration: "none" }}
        >
          ⏻
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
