/**
 * File: CountryService.spec.js
 * Author: Jaison Schmidt
 * Description: Tests over CountryService module.
 * Data: 26/09/2019
 */
import CountryService from "./CountryService";

describe("test services/CountryService", () => {
  const countryService = new CountryService();

  it("verify if getAllCountries return an array of objects with at least one object", done => {
    countryService.getAllCountries().then(response => {
      expect(typeof response[0]).toBe("object");
      done();
    });
  });

  it("verify if a callingcode return an array with one object", done => {
    // randomly chosen
    const callingCode = 236;
    expect(countryService.getCountry(callingCode) === 1).toBe(true);
  });
});
