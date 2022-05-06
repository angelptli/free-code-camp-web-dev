function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((item) => ({
    name: item.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    ),
  }));
}

// should return [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// should return [{name : "iss", orbitalPeriod: 5557},
// {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
