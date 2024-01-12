import React, { useState } from "react";
import "./sprtPageProperty.css";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import Map from "../../components/map/Map";
import BookingModel from "../../components/BookingModel/BookingModel";
const SprtPageProperty = () => {
  const { pathname } = useLocation();

  const id = pathname.split("/").slice(-1)[0];
  // console.log(id);

  const { data, isError, isLoading } = useQuery(["resd", id], () =>
    getProperty(id)
  );


  const [modelOpened, setModalOpened] = useState(false)

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while Fetching the property details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth prop-container">

        {/* Like button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        {/* image */}
        <img src={data.image} alt="mmm" />

        <div className="flexCenter prop-details">
          <div className="flexColStart prop-left">
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ${data.price}
              </span>
            </div>
            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrroms */}
              <div className="flexStart eachFacility">
                <FaShower size={20} color="#1f3e72" />
                <span>{data.facilities.bathrooms} Bathrooms</span>
              </div>
              {/* parking */}
              <div className="flexStart eachFacility">
                <AiTwotoneCar size={20} color="#1f3e72" />
                <span>{data.facilities.parking} Parking</span>
              </div>
              {/* bedRooms */}
              <div className="flexStart eachFacility">
                <MdMeetingRoom size={20} color="#1f3e72" />
                <span>{data.facilities.bedrooms} Rooms</span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{textAlign:'justify'}}>
              {data.description
}
            </span>

           <div className="flexStart" >
           <MdLocationPin size={25} />
            <span className="secondaryText">
              {data.address}
              {data.city}
              {data.country}
            </span>

           </div>
           
          {/* booking button */}
          <button className="button" onClick={()=> {
            setModalOpened(true)
          }}>
            Book Your Vist
          </button>

          <BookingModel 
          opened = {modelOpened}
          setOpened = {setModalOpened}
          propertyId = {id}
          
          
          />


          </div>
          {/* right side funclities */}
          <div className="map">
            <Map address={data.address} city={data.city} country= {data.country} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprtPageProperty;
