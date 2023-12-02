const product =require("../model/product")

const getALLProducts= async (req,res)=>{

  const {company,name,featured,sort} = req.query;
  const queryObject={};

   if(company){
    queryObject.company=company
  
   }
   if(name){
    queryObject.name={$regex:name,$options:'i'}
    
   }
    let result=product.find(queryObject).sort(sort)

   if(sort){
    let sortfix=sort.replace("," , " ");
    result=result.sort(sortfix);
     
   }
   if(featured){
    queryObject.featured=featured
    
   }

   let page= Number(req.query.page) || 1;
   let limit=Number(req.query.limit) || 3;
   let skip=(page-1)*limit;
   result=result.skip(skip).limit(limit);

   console.log(queryObject)

  const MyProduct=await result.sort(sort)
  res.status(200).json({MyProduct, nbHits:MyProduct.length})
};

const getALLProductsTesting= async (req,res)=>{
  const MyProduct=await product.find(req.query).sort('name -price');
   
  res.status(200).json({MyProduct})
  };

  module.exports ={getALLProducts,getALLProductsTesting}