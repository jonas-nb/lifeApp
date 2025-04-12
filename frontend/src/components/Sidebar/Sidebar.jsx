import React from "react";
import { MdWaterDrop } from "react-icons/md";
import { FaBasketballBall } from "react-icons/fa";
import { LuUtensils } from "react-icons/lu";
import { RiBookShelfLine } from "react-icons/ri";

const Sidebar = () => {
  const icons = [
    { icon: <MdWaterDrop size={24} />, label: "Hidratação" },
    { icon: <FaBasketballBall size={24} />, label: "Exercício" },
    { icon: <LuUtensils size={24} />, label: "Alimentação" },
    { icon: <RiBookShelfLine size={24} />, label: "Registro do Dia" },
  ];

  return (
    <div
      style={{
        width: "60px",
        height: "100vh",
        background: "#98ffb2",
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
          <a
            key={index}
            href="#"
            title={item.label}
            style={{
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              transition: "all 0.2s",
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
          </a>
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
        <a href="#" title="Ajuda" style={{ color: "#000" }}>
          ?
        </a>
        <a href="#" title="Sair" style={{ color: "#000" }}>
          ⏻
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
