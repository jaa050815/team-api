const response = await fetch('http://localhost:3000/karen');
const name = await response.text();
expect.(name).toBe("karen");