const response = await fetch('http://localhost:3000/alex');
const name = await response.text();
expect(name).toBe("alex");