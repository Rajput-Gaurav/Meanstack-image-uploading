const Product = require('../models/product');

// CRETAE OR INSERT
exports.create = (req, res) => {
    console.log(req.file);

    const product = {
        username: req.body.username,
        email: req.body.email,
        imagePath: "http://localhost:7000/uploads/images/" + req.file.filename,
        isDeleted: false
    };
    console.log("Product", product);
    Product.create(product, function(err, result){
        if(err) {
            res.json({ status: "Fail", message: "Failed to add product!", err: err});
        }
            res.json({ status: "Success", message: "Product added successfully!!!", data: result});
    });
}

// exports.create = async (req, res) => {
//     const { username } = req.body;
//     const { email } = req.body;
//     const imagePath = 'http://localhost:7000/uploads/images/' + req.file.filename;
//     isDeleted = false;

//     const product = new Product({
//         username,
//         email,
//         imagePath,
//         isDeleted
//     });
//     const createdProduct = await product.save();
//     res.status(201).json({
//         product: { ...createdProduct._doc },
//     });
// }

// FIND ALL PRODUCT:
exports.findAll = (req, res) => {

    Product.find()
        .then(product => {
            if (!product)
                res.json({ status: "Fail", message: "Fail too get product!"});
            else
                res.json({ status: "success", message: "Product found successfully!!!", data: product});                
        })
        .catch(err => {
            res.json({ status: "Fail", message: err.message || "some error occurred!"});
        });
}