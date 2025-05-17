function createCar(data) {
    return {
      brand: data.brand,
      model: data.model,
      year: data.year,
      pricePerDay: data.pricePerDay,
      fuelType: data.fuelType,
      seats: data.seats,
      transmission: data.transmission,
      available: data.available ?? true,
      features: data.features || [],
      description: data.description || ""
    };
  }

  module.exports = {
    createCar
    
  };
  