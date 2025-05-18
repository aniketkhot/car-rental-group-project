class BasePricing {
  calculate(pricePerDay, days) {
    return pricePerDay * days;
  }
}

class StandardPricing extends BasePricing {}

class CorporatePricing extends BasePricing {
  calculate(pricePerDay, days) {
    return pricePerDay * days * 0.85;
  }
}

class WeekendPricing extends BasePricing {
  calculate(pricePerDay, days) {
    return pricePerDay * days * 1.15;
  }
}

class LongTermPricing extends BasePricing {
  calculate(pricePerDay, days) {
    if (days > 7) {
      return pricePerDay * days * 0.8;
    }
    return pricePerDay * days;
  }
}

class PeakSeasonPricing extends BasePricing {
  calculate(pricePerDay, days, startDate) {
    const peakStart = new Date("2025-12-15");
    const peakEnd = new Date("2026-01-10");

    if (startDate >= peakStart && startDate <= peakEnd) {
      return pricePerDay * days * 1.25;
    }

    return pricePerDay * days;
  }
}

module.exports = {
  StandardPricing,
  CorporatePricing,
  WeekendPricing,
  LongTermPricing,
  PeakSeasonPricing
};
