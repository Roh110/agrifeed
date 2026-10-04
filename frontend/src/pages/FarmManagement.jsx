import React, { useState } from "react";

function FarmManagement() {
  const [farms, setFarms] = useState([
    {
      id: 1,
      name: "Green Valley Farm",
      location: "Hyderabad",
      animals: 45,
      type: "Dairy"
    },
    {
      id: 2,
      name: "Sunrise Dairy",
      location: "Warangal",
      animals: 30,
      type: "Dairy"
    },
    {
      id: 3,
      name: "Harvest Fields",
      location: "Nizamabad",
      animals: 60,
      type: "Mixed Livestock"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [farmName, setFarmName] = useState("");
  const [location, setLocation] = useState("");
  const [animals, setAnimals] = useState("");
  const [farmType, setFarmType] = useState("Dairy");

  const handleAddFarm = (event) => {
    event.preventDefault();

    if (
      !farmName.trim() ||
      !location.trim() ||
      !animals ||
      Number(animals) < 0
    ) {
      alert("Please enter valid farm details.");
      return;
    }

    const newFarm = {
      id: Date.now(),
      name: farmName.trim(),
      location: location.trim(),
      animals: Number(animals),
      type: farmType
    };

    setFarms((currentFarms) => [...currentFarms, newFarm]);

    setFarmName("");
    setLocation("");
    setAnimals("");
    setFarmType("Dairy");
    setShowForm(false);
  };

  return (
    <div className="farm-management-page">
      <div className="page-header">
        <div>
          <h1>Farm Management</h1>
          <p>
            Manage farm profiles and livestock information.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm((current) => !current)}
        >
          {showForm ? "Cancel" : "+ Add Farm"}
        </button>
      </div>

      {showForm && (
        <form className="farm-form" onSubmit={handleAddFarm}>
          <h2>Add New Farm</h2>

          <label htmlFor="farmName">Farm Name</label>
          <input
            id="farmName"
            type="text"
            value={farmName}
            onChange={(event) => setFarmName(event.target.value)}
            placeholder="Enter farm name"
            required
          />

          <label htmlFor="farmLocation">Location</label>
          <input
            id="farmLocation"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter farm location"
            required
          />

          <label htmlFor="animalCount">Number of Animals</label>
          <input
            id="animalCount"
            type="number"
            min="0"
            value={animals}
            onChange={(event) => setAnimals(event.target.value)}
            placeholder="Enter animal count"
            required
          />

          <label htmlFor="farmType">Farm Type</label>
          <select
            id="farmType"
            value={farmType}
            onChange={(event) => setFarmType(event.target.value)}
          >
            <option value="Dairy">Dairy</option>
            <option value="Poultry">Poultry</option>
            <option value="Mixed Livestock">Mixed Livestock</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="primary-button">
            Save Farm
          </button>
        </form>
      )}

      <div className="farm-summary">
        <div className="farm-summary-card">
          <span>Total Farms</span>
          <h2>{farms.length}</h2>
        </div>

        <div className="farm-summary-card">
          <span>Total Animals</span>
          <h2>
            {farms.reduce((total, farm) => total + farm.animals, 0)}
          </h2>
        </div>
      </div>

      <div className="farm-grid">
        {farms.map((farm) => (
          <div className="farm-card" key={farm.id}>
            <div className="farm-card-icon">🏡</div>

            <h3>{farm.name}</h3>
            <p>📍 {farm.location}</p>
            <p>🐄 Animals: {farm.animals}</p>

            <span className="farm-type">{farm.type}</span>
          </div>
        ))}
      </div>

      <p className="demo-note">
        Farm information is currently stored in browser memory only.
        A database will be needed for permanent storage.
      </p>
    </div>
  );
}

export default FarmManagement;