const register = (req, res) => {
  res.json({ msg: 'Registering user...' });
};

const profile = (req, res) => {
  res.json({ msg: 'Showing profile...' });
};

export { 
  register, 
  profile,
};
