const Package = require('../models/package');


exports.getPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        console.log('Error fetching packages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getPackageById = async (req, res) => {
    try {
        const package = await Package.findById(req.params.id);
        if (!package) {
            return res.status(404).json({ message: 'package not found' });
        }
        res.json(package);
    } catch (error) {
        console.log('Error fetching package:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createPackage = async (req, res) => {
    try {
        const package = new Package({
            name: req.body.name,
            destination: req.body.destination,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        });
        await package.save();
        res.json(package);
    }
    catch (error) {
        console.log('Error creating package:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updatePackage = async (req, res) => {
    try {
        const package = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!package) {
            return res.status(404).json({ message: 'package not found' });
        }
        res.json(package);
    } catch (error) {
        console.log('Error updating package:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deletePackage = async (req, res) => {
    try {
        const package = await Package.findByIdAndDelete(req.params.id);
        if (!package) {
            return res.status(404).json({ message: 'package not found' });
        }
        res.json(package);
    } catch (error) {
        console.log('Error deleting package:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};