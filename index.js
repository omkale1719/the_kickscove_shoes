const express=require("express");
const app = express();
const mongoose=require("mongoose");
const Listing=require("./model/listing.js");
const Sale=require("./model/sale.js");
const New_A=require("./model/na.js");
const Men=require("./model/men.js");
const Women=require("./model/women.js");
const Collections=require("./model/collections.js");
const Kids=require("./model/kids.js");
const path=require("path");
const ejsMate = require('ejs-mate');
const session = require('express-session');
const Wishlist = require('./model/wishlist.js');

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.engine('ejs', ejsMate);
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true })); 
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/shoes_palace",{

        });
        console.log("Connection sucessful");
    }catch (err){
        console.log("Connection error",err);

    }
}
main();

// app.get("/testListing", async (req, res) => {

//       let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//        Rprice:2400,
//       });
    
//       await sampleListing.save();
//       console.log(sampleListing);
//       console.log("sample was saved");
//       res.send("successful testing");
//     });


app.get("/showall",async(req,res)=>{
    const allListing= await Listing.find({});
    // console.log(allListing);
    res.render("./listings/showall.ejs",{allListing});
    
});

app.get("/showdetail/:id",async(req,res)=>{
const {id}=req.params;
const listing=await Listing.findById(id);
res.render("./listings/showdetail.ejs",{listing});
// res.send("data is displaying");
})



app.get("/salepage",async(req,res)=>{
    const allListing= await Sale.find({});
    // console.log(allListing);
    res.render("./listings/sale_showall.ejs",{allListing});
    
});

app.get("/sale_showdetail/:id",async(req,res)=>{
    const {id}=req.params;
    const listing=await Sale.findById(id);
    res.render("./listings/sale_showdetail.ejs",{listing});
    // res.send("data is displayed");
    })



app.get("/arivalpage",async(req,res)=>{
    const allListing= await New_A.find({});
    // console.log(allListing);
    res.render("./listings/new_A_showall.ejs",{allListing});
    
});

app.get("/new_A_showdetail/:id",async(req,res)=>{
    const {id}=req.params;
    const listing=await New_A.findById(id);
    res.render("./listings/new_A_showdetail.ejs",{listing});
    // res.send("data is displayed");
    })



app.get("/men",async(req,res)=>{
    const allListing= await Men.find({});
    // console.log(allListing);
    res.render("./listings/men.ejs",{allListing});
    
});


app.get("/men_d/:id",async(req,res)=>{
    const {id}=req.params;
    const listing=await Men.findById(id);
    res.render("./listings/men_d.ejs",{listing});
    // res.send("data is displayed");
    })

    

app.get("/women",async(req,res)=>{
        const allListing= await Women.find({});
        // console.log(allListing);
        res.render("./listings/women.ejs",{allListing});
        
    });
    
app.get("/women_d/:id",async(req,res)=>{
        const {id}=req.params;
        const listing=await Women.findById(id);
        res.render("./listings/women_d.ejs",{listing});
        // res.send("data is displayed");
        })

       

app.get("/kids",async(req,res)=>{
            const allListing= await Kids.find({});
            // console.log(allListing);
            res.render("./listings/kids.ejs",{allListing});
            
        });
        
app.get("/kids_d/:id",async(req,res)=>{
            const {id}=req.params;
            const listing=await Kids.findById(id);
            res.render("./listings/kids_d.ejs",{listing});
            // res.send("data is displayed");
            })

    

app.get("/collections",async(req,res)=>{
                const allListing= await Collections.find({});
                // console.log(allListing);
                res.render("./listings/collections.ejs",{allListing});
                
            });
                  
app.get("/collections_d/:id",async(req,res)=>{
                const {id}=req.params;
                const listing=await Collections.findById(id);
                res.render("./listings/collections_d.ejs",{listing});
                // res.send("data is displayed");
                })
                
const models = {
    Sale,
    Listing,
    New_A,
    Men,
    Women,
    Kids,
    Collections
};

async function getProductById(productModel, productId) {
    try {
        const model = models[productModel];
        if (!model) return null;
        return await model.findById(productId);
    } catch (error) {
        console.error(`Error fetching product by ID: ${error.message}`);
        return null;
    }
}

// add to cart 

app.post('/add-to-cart', async (req, res) => {
    const { productId, quantity, model } = req.body; // Extracting data from request body

    try {
        // Ensure that the product exists based on the model
        const product = await getProductById(model, productId);
        if (!product) {
            return res.json({ success: false, message: 'Product not found' });
        }

        // Initialize the cart if it doesn't exist
        if (!req.session.cart) {
            req.session.cart = [];
        }

        // Add the product to the cart
        req.session.cart.push({
            productId: product._id,
            title: product.title,
            price: product.price,
            quantity: quantity,
        });

        console.log("Cart:", req.session.cart);
        return res.json({ success: true, message: 'Added to cart' }); // Send a success response
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.json({ success: false, message: 'Error adding to cart' }); // Handle error
    }
});




// Redirect back to the cart page
app.get('/cart', (req, res) => {
    // Render the cart page with the current cart data
    res.render('cart', { cart: req.session.cart || [] });
});




// buy now route

app.post('/buy-now', async (req, res) => {
    const { productId, quantity, model } = req.body;

    try {
        // Find the product in the database (Sale, Listing, etc.)
        const product = await getProductById(model, productId);  // Change to the correct model if needed
        if (!product) {
            return res.render("order_sucess.ejs", { message: 'Product not found' });
           
        }

        // You can store this order in the session or proceed to checkout directly
        req.session.order = {
            productId: product._id,
            title: product.title,
            price: product.price,
            quantity: quantity,
        };

        // Redirect to checkout page
        res.json({ success: true });
    } catch (error) {
        console.error('Error processing buy now:', error);
        res.json({ success: false, message: 'Error processing order' });
    }
});

app.get('/buy_now1', (req, res) => {
    const buy = req.session.order || []; // Get cart from session or default to an empty array
    res.render("buy_now.ejs", { buy }); // Render the cart view with the cart items
});

// Cart page route
app.get('/cart', (req, res) => {
    const cart = req.session.cart || []; // Get cart from session or default to an empty array
    res.render("cart.ejs", { cart }); // Render the cart view with the cart items
});

//wishlist

app.post('/add-to-wishlist', async (req, res) => {
    // console.log('Request body:', req.body);  // Check the entire request body
    const { productId, model } = req.body;
    // console.log('Product ID:', productId);
   // console.log('Model:', model);  // This will help you confirm if model is sent correctly
    if (!productId || !model) {
        return res.status(400).json({ error: 'Product ID or model not provided' });
    }

    try {

        const product = await getProductById(model, productId);
        if (!product) {
            return res.status(500).json({ error: 'Product not found' });
        }

        // Ensure the session wishlist exists
        if (!req.session.wishlist) {
            req.session.wishlist = [];
        }

        // Add the product to the wishlist
        req.session.wishlist.push(product._id);
       res.redirect(req.get('referer')); 
    } catch (err) {
        console.error('Error adding to wishlist:', err);
        res.status(500).json({ error: 'Error adding to wishlist' });
    }

});

app.get('/wishlist', async (req, res) => {
    if (!req.session.wishlist || req.session.wishlist.length === 0) {
        return res.redirect('/Empty_wishlis');
    }

    try {
        // Modify this to handle fetching products from different models as needed
        const wishlistProducts = [];

        for (let productId of req.session.wishlist) {
            const product = await Listing.findById(productId) || await Sale.findById(productId)|| await New_A.findById(productId)|| await Men.findById(productId)|| await Women.findById(productId)|| await Collections.findById(productId)|| await Kids.findById(productId); // Add more models as needed
            if (product) {
                wishlistProducts.push(product);
            }
        }

        res.render('wishlist.ejs', { wishlist: wishlistProducts });
    } catch (err) {
        console.error('Error fetching wishlist:', err);
        res.status(500).json({ error: 'Error fetching wishlist' });
    }
});

app.get('/Empty_wishlis', (req, res) => {
    res.render('Empty_wishlist.ejs'); // Render the empty wishlist page
});

app.post('/remove-from-wishlist', async (req, res) => {
    const { productId } = req.body;

    try {
        // Check if the wishlist exists in the session
        if (!req.session.wishlist) {
            return res.redirect('/wishlist');
        }

        // Remove the product from the wishlist in the session
        req.session.wishlist = req.session.wishlist.filter(id => id !== productId);

        res.redirect('/wishlist');
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        res.redirect('/wishlist');
    }
});

// app.get('/wishlist-count', async (req, res) => {
//     const userId = req.session._id; // वापरकर्त्याचा ID सत्रात
//     if (!userId) {
//         return res.json({ count: 0 }); // वापरकर्ता साइन इन न झाल्यास, 0 परत करा
        
//     }

//     try {
//         const wishlist = await Wishlist.findOne({ userId });
//         const count = wishlist ? wishlist.products.length : 0; // उत्पादनांची संख्या मिळवा
//         res.json({ count }); // संख्या JSON म्हणून परत करा
//     } catch (error) {
//         console.error('Wishlist संख्या मिळवण्यात चूक:', error);
//         res.status(500).json({ error: 'Wishlist संख्या मिळवण्यात चूक' });
//     }
// });

app.get("/privacy",(req,res)=>{
    res.render("./footer_links/privacy.ejs");
})
app.get("/terms",(req,res)=>{
    res.render("./footer_links/term.ejs");
})
app.get("/track_orders",(req,res)=>{
    res.render("track_order.ejs");
})


app.listen(3000,()=>{
    console.log("port 3000 is started");
});

