const response = await fetch('http://localhost:3000/craigen');
const name = await response.text();
expect(name).toBe("craigen");
