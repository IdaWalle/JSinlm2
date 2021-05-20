const mongodb = require('mongoose');
const Product = require('./productSchema');
 
exports.getProducts = (req, res) => {
    Product.find()
    .then(data => res.status(200).json(data))
    .catch (err => res.status(500).json({
        statusCode:500,
        status: false,
        message: 'Could not Fetch your products'
    }))
}
 
exports.getOneProduct = (req,res) => {
    Product.exists({_id: req.params.id}, (err, result) =>{
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Bad request were made!'
            })
        }
        if(result) {
            Product.findOne({_id: req.params.id})
            .then(data => res.status(200).json(data))
            .catch (err => res.status(500).json({
                statusCode:500,
                status: false,
                message: 'Could not Fetch your products'
                }))
        }
        else {
            res.status(404).json({
                statusCode:  404,
                status: false,
                message: 'That product does not exist'
            })
        }
    })
}
exports.createProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err,result) => {
      if(err) {
          return  res.status(500).json(err);
      }
      if(result) {
          return res.status(400).json({
              statusCode:400,
              status: false,
              message: 'A product like that already exist'
          })
      }

      const newProduct = new Product ({
          name: req.body.name,
          short: req.body.short,
          desc: req.body.desc,
          price: req.body.price,
          image: req.body.image
          
      })

      newProduct.save()
      .then(() => {
          res.status(201).json({
              statusCode: 201,
              status:true,
              message: ' Product was created'
          
          })
      })
      .catch(err => {
          res.status(500).json({
              statusCode:500,
              status: false,
              message: 'Could not create the product!'
          })
      })

  })

}
exports.updateProduct = (req, res) => {
  Product.exists({_id: req.params.id}, (err,result) => {
      if(err) {
          return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'A bad request were made'
          })
      }
      if(result) {
          Product.updateOne({ _id: req.params.id },{
              ...req.body,
              modified: Date.now()
          })
          .then(() => {
              res.status(200).json({
                  statusCode:200,
                  status: true,
                  message: 'Product updated'
              })
          })
          .catch(() =>{
              res.status(500).json({
                  statusCode: 500,
                  status: false,
                  message: 'Failed to update the product'
              })
          })
      } else {
          res.status(404).json({
              statusCode: 404,
              status: false,
              message: 'That product does not exist'
          })
      }

      
  })
  

}
exports.deleteOneProduct = (req, res) => {
  Product.exists({_id: req.params.id}, (err, result) =>{
      if(err){
          return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'The request was failed'
          })
      }

      if(result){
          Product.deleteOne({_id: req.params.id})
          .then(() =>{
              res.status(200).json({
                  statusCode: 200,
                  status: true,
                  message: 'Product removed'
              })
          })
          .catch(()=> {
              res.status(500).json({
                  statusCode: 500,
                  status: false,
                  message: 'Could not delete that product!'
              })
          })
      }
      else {
          res.status(404).json({
              statusCode: 404,
              status: false,
              message: 'Product doesent exist!'
          })
      }

  })
  
}