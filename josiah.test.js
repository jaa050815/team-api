const fetch = require('node-fetch');

test('test for Josiah', async () => {
    const response = await fetch('http://localhost:3000/josiah');
    const name = await response.text();
    expect(name).toBe("josiah");
});
