// According to Kepler's Third Law, the orbital period  T
//   of two point masses orbiting each other in a circular or elliptic orbit is:
// 2pi * sqrt(a^3/μ)
// a
//   is the orbit's semi-major axis
// μ=GM
//   is the standard gravitational parameter
// G
//   is the gravitational constant,
// M
//   is the mass of the more massive body.
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//note a is actually just earthRadius + obg.avgAlt...


function orbitalPeriod(arr: any[]) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let retArr: any[] = [];
    arr.forEach(obj => {
        const a = 2 * Math.PI; 
        const b = Math.sqrt((Math.pow(earthRadius + obj.avgAlt,3))/GM);
        const orbitalPeriod = Math.round(a * b); 
        retArr.push({name:obj.name, orbitalPeriod: orbitalPeriod});
    });
    return retArr; 

  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //should return 86400
