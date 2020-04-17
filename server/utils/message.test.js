const expect = require('expect');
let {generate_msg, generate_location_message} = require('./message');

describe('Generate Message', ()=>{
  it('should generate correct message object',()=>{
    const from = 'UJ' , text = 'Some random text' , message = generate_msg(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
});

describe('Generate Location Message', ()=>{
  it('should generate correct location object ',()=>{
    const from = 'UJ' , coords = { lat:14 , long: 66 } , url = `https://www.google.com/maps/q=?${coords.lat},${coords.long}` , message = generate_location_message(from, coords);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,url});
  })
});
