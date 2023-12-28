const home = (req, res) => {
  const { favouriteDish } = req.body;
  res.status(200).json({ message: favouriteDish });
};
module.exports = home;
