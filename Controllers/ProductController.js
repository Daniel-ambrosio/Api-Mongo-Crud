const ProductModel = require('../Models/ProductModel');

class ProductController{
    async store(req,res){
        const {title, description, price} = req.body;
        if(!title || !description || !price){
            return res.status(404).json({message:" Title, Description and Price is required"});
        }
        const createdProduct = await ProductModel.create(req.body);
        return res.status(200).json(createdProduct);
    }
    async index(req,res){
        const products = await ProductModel.find();

        return res.status(200).json(products);
    } 
    async show(req,res){     
     try{
         const {id} =  req.params
        const product = await ProductModel.findById(id);
        if(!product){
        return res.status(404).json({message:"Product does not exists"});
        }
        return res.status(200).json(product);

        }catch(error){
            return res.status(404).json({message:"Falied to serach product"});
        }
    }
    async update(req,res) {
      try{
        const {id} = req.params;
        await ProductModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({message: "Product update"});
      } catch(error) {
        return res.status(404).json({message:"Falied to update product"});
      } 
    

    }
    async destroy(req,res){
     try{
        const {id} = req.params;
        const productDeleted = await ProductModel.findByIdAndDelete(id);

        if(!productDeleted){
            return res.status(404).json({message: "Product doe snot exists"});
        }
        return res.status(200).json({message: "Product deleted "})
     } catch(error){
        return res.status(404).json({message:"Falied to deleted product"});
     }
    }
}
module.exports = new ProductController();