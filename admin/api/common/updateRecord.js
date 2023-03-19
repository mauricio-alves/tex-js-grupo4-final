const { app } = require('../database/conn');
const checkAdmin = require('../middlewares/checkAdmin');

const updateRecord = (path, model) => {
  app.put(`${path}/:id`, checkAdmin, async (req, res) => {
    try {
      const result = await model.findByPk(req.params.id);

      if (!result)
        return res.status(422).json({ message: 'Record not found!' });

      await result.update(req.body);
        
      res.status(200).json({ message: 'Record updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  });
};

module.exports = updateRecord;