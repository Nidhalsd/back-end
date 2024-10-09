const Product = require("../models/productSchema");
const Order = require("../models/orderSchema");



const addProduct = async (req, res) => {
  try {
    const { name, description, price, poster } = req.body;
    const newProduct = await Product.create(req.body);
    res.status(201).json({ msg: "product created", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "somthing went wrong/ add product", error: error.message });
  }
};



const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    return res.status(201).json({ msg: "Product updated ", updateProduct });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "somthing went wrong/ add product", error: error.message });
  }
};



const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    return res.status(201).json({ msg: "Product deleted ", deleteProduct });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "somthing went wrong/ add product", error: error.message });
  }
};



const getOrders = async (req, res) => {
  try {
    const getOrders = await Product.find();
    return res
      .status(201)
      .json({ msg: "Product founded succefully", getOrders });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "somthing went wrong/ add product", error: error.message });
  }
};



module.exports = { addProduct, updateProduct, deleteProduct, getOrders };
