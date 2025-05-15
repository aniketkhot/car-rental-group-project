import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, ClockIcon } from "lucide-react";

const cars = new Array(12).fill({
  type: "SUV",
  price: "$79.99",
  image: "@/components/landingimage.png", 
});

export default function CarHirePage() {
  return (
    <div className="min-h-screen bg-[#f9f6ef]">
      {/* Header */}
      <div className="bg-blue-200 p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Car hire in Brisbane</h1>
          <p className="text-blue-700">Great cars at great prices</p>
        </div>
        <div>
          <Button className="bg-orange-500 hover:bg-orange-600 mr-2">Register</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">Login in</Button>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex flex-wrap justify-center items-center gap-2 p-4 bg-[#f9f6ef]">
        <Input placeholder="Pick Up location" className="max-w-sm" />
        <div className="flex items-center gap-2">
          <Button variant="outline"><CalendarIcon className="w-4 h-4 mr-1" />Pick up Date</Button>
          <Button variant="outline"><ClockIcon className="w-4 h-4 mr-1" />Time</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><CalendarIcon className="w-4 h-4 mr-1" />Drop off Date</Button>
          <Button variant="outline"><ClockIcon className="w-4 h-4 mr-1" />Time</Button>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">Search</Button>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all">
            <img src={car.image} alt="Car" className="w-full h-40 object-contain mb-4" />
            <h2 className="text-lg font-semibold">{car.type}</h2>
            <p className="text-sm text-gray-500 mb-2">Price for 2 days from</p>
            <p className="text-xl font-bold">{index === 2 ? <span className="text-purple-600">$79.99</span> : car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
