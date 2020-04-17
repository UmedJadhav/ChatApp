let generate_msg = (from, text)=>{
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

let generate_location_message = (from, coords)=>{
  return {
    from,
    url: `https://www.google.com/maps/q=?${coords.lat},${coords.long}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generate_msg, generate_location_message};