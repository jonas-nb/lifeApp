import React, { useState, useEffect } from "react";

const Food = () => {
  const [meals, setMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const storedMeals = localStorage.getItem("meals");
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
    }
  }, []);

  // Save to localStorage whenever meals change
  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setMeals((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meals saved:", meals);

    // You can add a toast or feedback here later
    alert("Meals saved successfully!");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full flex flex-col max-w-md">
        <h1 className="text-xl font-bold text-center text-gray-800 font-mono mb-9">
          🍽️ Food Tracker
        </h1>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="text-lg font-semibold mb-4 text-gray-700">
              ✅ Select the meals you've had:
            </legend>

            <div className="flex flex-col gap-4 mb-6">
              <label
                className={`flex items-center gap-3 ${
                  meals.breakfast ? "line-through text-gray-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="meal"
                  value="breakfast"
                  checked={meals.breakfast}
                  onChange={handleChange}
                  className="accent-[#70e000] w-5 h-5"
                />
                <span className="text-gray-700 text-base hover:text-[#70e000] transition duration-200">
                  Breakfast
                </span>
              </label>

              <label
                className={`flex items-center gap-3 ${
                  meals.lunch ? "line-through text-gray-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="meal"
                  value="lunch"
                  checked={meals.lunch}
                  onChange={handleChange}
                  className="accent-[#70e000] w-5 h-5"
                />
                <span className="text-gray-700 text-base hover:text-[#70e000] transition duration-200">
                  Lunch
                </span>
              </label>

              <label
                className={`flex items-center gap-3 ${
                  meals.dinner ? "line-through text-gray-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="meal"
                  value="dinner"
                  checked={meals.dinner}
                  onChange={handleChange}
                  className="accent-[#70e000] w-5 h-5"
                />
                <span className="text-gray-700 text-base hover:text-[#70e000] transition duration-200">
                  Dinner
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#70e000] hover:bg-[#5cbf00] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Save Meals
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Food;
