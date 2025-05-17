function createCar(data) {
    return {
      brand: data.brand,
      model: data.model,
      year: data.year,
      pricePerDay: data.pricePerDay,
      transmission: data.transmission,
      fuelType: data.fuelType,
      seats: data.seats,
      doors: data.doors ?? 4,
      luggageCapacity: data.luggageCapacity ?? "2 Large Bags + 1 Cabin",
      airConditioning: data.airConditioning ?? true,
      features: data.features || [],
      available: data.available ?? true,
      description: data.description || "",
      imageUrl: data.imageUrl || "/images/default-car.png",
      rating: data.rating ?? 0,
      numOfRatings: data.numOfRatings ?? 0
    };
  }
  function createRental(data) {
    return {
      customer: data.customer,
      car: data.car,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      pricePerDay: data.pricePerDay,
      totalPrice: data.totalPrice,
      paymentStatus: data.paymentStatus || 'pending',
      rentalStatus: data.rentalStatus || 'booked',
      isCorporate: data.isCorporate ?? false,
      notes: data.notes || ''
    };
  }
  

  module.exports = {
    createCar,
    createRental
  };
  