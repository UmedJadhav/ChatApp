const expect = require('expect');
let (generate_message) = require('./messgae');

describe('Generate Message', ()=>{
  it('should generate correct message object',()=>{
    const from = 'UJ' , text = 'Some random text' , message = generate_message(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
});