let generate_msg = (from, text)=>{
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
}

module.exports = (generate_msg) ;