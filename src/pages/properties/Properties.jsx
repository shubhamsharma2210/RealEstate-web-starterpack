import React from "react";
import "./properties.css";
import SearchBar from "../../components/searchbar/SearchBar";
import useProperties from "../../hooks/useProperties";
import { PulseLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  console.log(data)
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error While Fetching Data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flexCenter wrapper" style={{ height: "60vh" }}>

        {/* Loader */}
        <PulseLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  // console.log(data)
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth p-container">
        {/* SearchBar */}
        <SearchBar />
        <div className="paddings flexCenter properties">
          {/* data fecth  in property page */}
          {
            data.map((card, i ) => (<PropertyCard key={i} card={card} />))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
