const home = (req, res) => {
  const favoriteDish = req.customer.favoriteDish;
  res.status(200).json({ message: "Home page", favoriteDish });
};
module.exports = home;
