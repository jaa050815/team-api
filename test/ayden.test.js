const fetch = require('node-fetch2');

it('test Ayden',async () => {

    const response = await fetch('http://localhost:3000/ayden');

    const name = await response.text();

    expect.name.toBe("ayden");
}
);