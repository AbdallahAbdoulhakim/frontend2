import React from "react";
import IconBox from "./IconBox";

const IconBoxContainer = ({ iconBoxes }) => {
  const items = [
    {
      id: 1,
      title: "POPULATION",
      subtitle: "870 038",
      legend: "Estimation de la population en 2023",
      icon: "bi bi-people-fill",
    },
    {
      id: 2,
      title: "INFLATION",
      subtitle: "- 2.0%",
      legend: "Glissement annuel en Décembre 2023",
      icon: "bi bi-cash-coin",
    },
    {
      id: 3,
      title: "CHÔMAGE",
      subtitle: "6.5%",
      legend: "Enquête sur l'Économie Informelle - 2022",
      icon: "bi bi-journals",
    },
    {
      id: 4,
      title: "CROISSANCE",
      subtitle: "+ 3.6%",
      legend: "Projection pour l'année 2023",
      icon: "bi bi-graph-up-arrow",
    },
  ];
  return (
    <div className="icon-boxes position-relative">
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          {items.map((item) => (
            <IconBox key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconBoxContainer;
