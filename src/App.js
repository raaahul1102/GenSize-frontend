import React, { useState } from "react";
// import Header from "./components/Header";
import SizeChart from "./components/SizeChart";
import ClothingItems from "./components/ClothingItems";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";

import "./App.css";

// Example data (use actual data or fetch from an API)
const sizeCharts = {
  // size chart data as in your original code...
  tops: {
    nike: [
      {
        size: "S",
        chest: "35-37.5",
        waist: "29-32",
        hips: "35-37.5",
        height: "5'3-5'5",
        confidence: "95%",
      },
      {
        size: "M",
        chest: "37.5-41",
        waist: "32-35",
        hips: "37.5-41",
        height: "5'5-5'7",
        confidence: "90%",
      },
      {
        size: "L",
        chest: "41-44",
        waist: "35-38",
        hips: "41-44",
        height: "5'7-5'10",
        confidence: "88%",
      },
      {
        size: "XL",
        chest: "44-48.5",
        waist: "38-43",
        hips: "44-47",
        height: "5'11-6'0",
        confidence: "85%",
      },
    ],
    adidas: [
      {
        size: "S",
        chest: "33-35",
        waist: "27-29",
        hips: "33-35",
        height: "63-66",
        confidence: "93%",
      },
      {
        size: "M",
        chest: "37-39",
        waist: "31-33",
        hips: "37-39",
        height: "66-69",
        confidence: "89%",
      },
      {
        size: "L",
        chest: "41-43",
        waist: "35-37",
        hips: "41-43",
        height: "69-72",
        confidence: "87%",
      },
      {
        size: "XL",
        chest: "45-47",
        waist: "39-41",
        hips: "45-47",
        height: "72-75",
        confidence: "84%",
      },
    ],
    puma: [
      {
        size: "S",
        chest: "33-35",
        waist: "27-29",
        hips: "33-35",
        height: "63-66",
        confidence: "93%",
      },
      {
        size: "M",
        chest: "37-39",
        waist: "31-33",
        hips: "37-39",
        height: "66-69",
        confidence: "89%",
      },
      {
        size: "L",
        chest: "41-43",
        waist: "35-37",
        hips: "41-43",
        height: "69-72",
        confidence: "87%",
      },
      {
        size: "XL",
        chest: "45-47",
        waist: "39-41",
        hips: "45-47",
        height: "72-75",
        confidence: "84%",
      },
    ],
  },
  bottoms: {
    nike: [
      {
        size: "S",
        chest: "-",
        waist: "28-30",
        hips: "34-36",
        height: "-",
        confidence: "92%",
      },
      {
        size: "M",
        chest: "-",
        waist: "32-34",
        hips: "38-40",
        height: "-",
        confidence: "89%",
      },
      {
        size: "L",
        chest: "-",
        waist: "36-38",
        hips: "42-44",
        height: "-",
        confidence: "86%",
      },
      {
        size: "XL",
        chest: "-",
        waist: "40-42",
        hips: "46-48",
        height: "-",
        confidence: "83%",
      },
    ],
    adidas: [
      {
        size: "S",
        chest: "-",
        waist: "27-29",
        hips: "33-35",
        height: "-",
        confidence: "90%",
      },
      {
        size: "M",
        chest: "-",
        waist: "31-33",
        hips: "37-39",
        height: "-",
        confidence: "88%",
      },
      {
        size: "L",
        chest: "-",
        waist: "35-37",
        hips: "41-43",
        height: "-",
        confidence: "85%",
      },
      {
        size: "XL",
        chest: "-",
        waist: "39-41",
        hips: "45-47",
        height: "-",
        confidence: "82%",
      },
    ],
    puma: [
      {
        size: "S",
        chest: "-",
        waist: "27-29",
        hips: "33-35",
        height: "-",
        confidence: "90%",
      },
      {
        size: "M",
        chest: "-",
        waist: "31-33",
        hips: "37-39",
        height: "-",
        confidence: "88%",
      },
      {
        size: "L",
        chest: "-",
        waist: "35-37",
        hips: "41-43",
        height: "-",
        confidence: "85%",
      },
      {
        size: "XL",
        chest: "-",
        waist: "39-41",
        hips: "45-47",
        height: "-",
        confidence: "82%",
      },
    ],
  },
  dresses: {
    nike: [
      {
        size: "S",
        chest: "-",
        waist: "28-30",
        hips: "34-36",
        height: "-",
        confidence: "92%",
      },
      {
        size: "M",
        chest: "-",
        waist: "32-34",
        hips: "38-40",
        height: "-",
        confidence: "89%",
      },
      {
        size: "L",
        chest: "-",
        waist: "36-38",
        hips: "42-44",
        height: "-",
        confidence: "86%",
      },
      {
        size: "XL",
        chest: "-",
        waist: "40-42",
        hips: "46-48",
        height: "-",
        confidence: "83%",
      },
    ],
    adidas: [
      {
        size: "S",
        chest: "-",
        waist: "27-29",
        hips: "33-35",
        height: "-",
        confidence: "90%",
      },
      {
        size: "M",
        chest: "-",
        waist: "31-33",
        hips: "37-39",
        height: "-",
        confidence: "88%",
      },
      {
        size: "L",
        chest: "-",
        waist: "35-37",
        hips: "41-43",
        height: "-",
        confidence: "85%",
      },
      {
        size: "XL",
        chest: "-",
        waist: "39-41",
        hips: "45-47",
        height: "-",
        confidence: "82%",
      },
    ],
    puma: [
      {
        size: "S",
        chest: "-",
        waist: "27-29",
        hips: "33-35",
        height: "-",
        confidence: "90%",
      },
      {
        size: "M",
        chest: "-",
        waist: "31-33",
        hips: "37-39",
        height: "-",
        confidence: "88%",
      },
      {
        size: "L",
        chest: "-",
        waist: "35-37",
        hips: "41-43",
        height: "-",
        confidence: "85%",
      },
      {
        size: "XL",
        chest: "-",
        waist: "39-41",
        hips: "45-47",
        height: "-",
        confidence: "82%",
      },
    ],
  },
};

const clothingItems = {
  // clothing items data as in your original code...
  nike: {
    tops: [
      { src: "./assets/nike1.png", name: "Nike Top 1" },
      { src: "./assets/nike2.png", name: "Nike Top 2" },
    ],
    bottoms: [{ src: "/images/nike-bottom1.jpg", name: "Nike Bottom 1" }],
    dresses: [{ src: "/images/nike-bottom1.jpg", name: "Nike Bottom 1" }],
  },
  adidas: {
    tops: [
      { src: "/images/adidas-top1.jpg", name: "Adidas Top 1" },
      { src: "/images/adidas-top2.jpg", name: "Adidas Top 2" },
    ],
  },
  puma: {
    tops: [
      { src: "/images/adidas-top1.jpg", name: "Adidas Top 1" },
      { src: "/images/adidas-top2.jpg", name: "Adidas Top 2" },
    ],
  },
};

function App() {
  const [apparelType, setApparelType] = useState("tops");
  const [brand, setBrand] = useState("nike");

  const handleApparelChange = (e) => setApparelType(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);

  const chartData = sizeCharts[apparelType]?.[brand] || [];
  const items = clothingItems[brand]?.[apparelType] || [];

  return (
    <div>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Page Layout with Filters and Main Content */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Filters Sidebar */}
          <Filters
            apparelType={apparelType}
            handleApparelChange={handleApparelChange}
            brand={brand}
            handleBrandChange={handleBrandChange}
          />

          {/* Main Content */}
          <div style={{ flex: "1", marginLeft: "20px" }}>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            ></div>

            <SizeChart chartData={chartData} brand={brand} />
            <ClothingItems items={items} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
