import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import { MongoClient, ObjectId } from "mongodb";

// Generate users data

function user_generator(num_of_samples) {
    const users = []
    // Users
    for (let i =1; i<= num_of_samples; i++) {
        let first_name = faker.person.firstName();
        let last_name  = faker.person.lastName();
        let userInfo = {
            first_name: first_name,
            last_name: last_name,
            user_name : `${first_name.toLowerCase()}.${last_name.toLowerCase()}123`,
            gender : faker.person.sexType(),
            email : `${first_name.toLowerCase()}.${last_name.toLowerCase()}@mail.com`,
            phone_number : faker.phone.number(),
            address : faker.location.streetAddress({ useFullAddress: true }),
            avatar_url : faker.image.avatar(),
        }
        users.push(userInfo)
    }

    fs.writeFile ("input.json", JSON.stringify(users), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
    return users
}

// user_generator(3)


// Generate products data

function imageToBase64(loc) {
    return fs.readFileSync(`../../src/assets/images/${loc}`, 'base64');
}

const items = ["bag", "dress", "trousers", "shoes"]

const bag_descriptions = [
    "Achieve an effortlessly chic look with this item, featuring a design that seamlessly transitions from day to night.",
    "Make a statement in your everyday attire with this versatile item, designed for both practicality and style to suit a range of occasions.",
    "Step into an effortlessly modern vibe with this item, crafted for a seamless blend of style and ease."
]
const dress_descriptions = [
    "Infused with a playful and vibrant spirit, this dress is a burst of energy. Whether through its color palette or lively patterns, it stands out with a bold and spirited charm.",
    "Make a statement with this bold and striking dress. Whether through daring design elements or a standout color, it captures attention and leaves a lasting impression.",
    "Achieve an air of effortless sophistication with this dress. Its refined details and timeless appeal ensure a polished look suitable for various occasions and seasons.",
    "Discover the allure of understated elegance in this dress. Refined simplicity and subtle details create a sophisticated look suitable for a range of occasions."
]
const trouser_descriptions = [
    "Achieve an air of casual sophistication with these trousers. The chic design effortlessly blends comfort and style for a versatile wardrobe staple.",
    "Stay ahead of trends with these fashion-forward trousers. Their unique details and contemporary flair add a bold touch to your overall look.",
    "Find the perfect balance between comfort and style with these casually chic trousers. Their relaxed fit and fashionable details make them a versatile choice for various settings."
]
const shoes_descriptions = [
    "Embrace a rebellious vibe with this pair of sleek modern rebels. The fusion of bold accents and sharp lines gives a daring and stylish edge to your footwear.",
    "Channel your inner rockstar with this pair of detail-driven wonders. Edgy details and a hint of rebellion create a fearless and stylish option for any daring ensemble.",
    "Elevate your look with this pair of futuristic high-fashion wonders. The unconventional design and modern accents add a touch of avant-garde sophistication to your ensemble."
]

const brands = ["Rixo", "Vintage", "Unbrand", "Lydia Jackson"]
const bag_images = ["bag1.jpeg", "bag2.jpeg", "bag3.jpeg"]
const dress_images = ["dress1.jpeg", "dress2.jpeg","dress3.jpeg","dress4.jpeg","dress5.jpeg","dress6.jpeg"]
const shoes_images = ["shoes1.jpeg", "shoes2.jpeg", "shoes3.jpeg"]
const trousers_images = ["trousers1.jpeg", "trousers2.jpeg", "trousers3.jpg", "trousers4.jpg"]

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function product_generator(num_of_samples) {
    const products = []
    // Users
    for (let i =1; i<= num_of_samples; i++) {
        const rand_indx = randomIntFromInterval(0,3)
        const rand_item = items[rand_indx]
        const rand_brand = brands[rand_indx]
        const rand_indx_desc = randomIntFromInterval(0,2)
        let rand_description = ""
        let image_base64 = ""
        let size = ""
    
        switch(rand_item) {
            case "bag":
                rand_description = bag_descriptions[rand_indx_desc]
                image_base64 = imageToBase64(bag_images[rand_indx_desc])
                size = "Dimension TBC"
                break;
            case "dress":
                rand_description = dress_descriptions[rand_indx]
                image_base64 = imageToBase64(dress_images[randomIntFromInterval(0,5)])
                size = randomIntFromInterval(6,18)
                break;
            case "trousers":
                rand_description = trouser_descriptions[rand_indx_desc]
                image_base64 = imageToBase64(trousers_images[rand_indx])
                size = randomIntFromInterval(6,18)
                break;
            case "shoes":
                rand_description = shoes_descriptions[rand_indx_desc]
                image_base64 = imageToBase64(shoes_images[rand_indx_desc])
                size = randomIntFromInterval(3,14)
                break;
        }

    
        let productInfo = {
            product_name : `${rand_brand} ${rand_item}`,
            size: size,
            description: rand_description,
            brand: rand_brand,
            rental_price: randomIntFromInterval(50,400),
            retail_price: randomIntFromInterval(405, 2000),
            image: image_base64
        }
        products.push(productInfo)
    }

    // fs.writeFile ("products.json", JSON.stringify(products), function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    //     }
    // );
    return products
}

// product_generator(20)
// randomProductPrice = faker.commerce.price();
// console.log(randomProductName)

const itemsId = ["65bae651502259e40dfd6ea9", "65bae651502259e40dfd6ead", "65bae651502259e40dfd6eae", "65bae651502259e40dfd6eaf", "65bae651502259e40dfd6eab", "65bae651502259e40dfd6eb1", "65bae651502259e40dfd6eb2", "65bae651502259e40dfd6eb3", "65bae651502259e40dfd6eaa", "65bae651502259e40dfd6eb5", "65bae651502259e40dfd6eb7", "65bae651502259e40dfd6eb6", "65bae651502259e40dfd6eb8", "65bae651502259e40dfd6eba", "65bae651502259e40dfd6eb9", "65bae651502259e40dfd6eac", "65bae651502259e40dfd6eb0", "65bae651502259e40dfd6eb4", "65bae651502259e40dfd6ebc", "65bae651502259e40dfd6ebb", "65bae692b945af93296f343d", "65bae692b945af93296f343e", "65bae692b945af93296f343f", "65bae692b945af93296f343c", "65bae692b945af93296f3443", "65bae692b945af93296f3441", "65bae692b945af93296f3442", "65bae692b945af93296f3440", "65bae692b945af93296f343b", "65bae692b945af93296f3444"]
const usersId = ["65bae495a09dc7347b48c752", "65bae6e07c1b1c2ce959a576", "65bae6e07c1b1c2ce959a578", "65bae6e07c1b1c2ce959a579", "65bae6e07c1b1c2ce959a577", "65bae6e07c1b1c2ce959a57a", "65bae6e07c1b1c2ce959a57b", "65bae6e07c1b1c2ce959a575", "65bae495a09dc7347b48c753", "65bae495a09dc7347b48c754"]

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const uri = "mongodb+srv://mongodbuser:mongo24@items.0ubczc8.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

async function run() {
  try {

    // Get the database and collection on which to run the operation
    const database = client.db("loanhood");
    const items = database.collection("users");

    // Create an array of documents to insert
    // const docs = user_generator(7)

    // Prevent additional documents from being inserted if one fails
    // const options = { ordered: true };

    // Execute insert operation
    // const result = await items.insertMany(docs, options);
   
    // Print result
    // console.log(`${result.insertedCount} documents were inserted`);

    // Option to get only item ids
    // const options = {
    //     projection: { _id: 1 },
    // };

    // GET QUERY to get ids
    // const cursor = await items.distinct("_id", {});

    // for await (const doc of cursor) {
    //     fs.appendFile('usersIds.json', `"${doc.toString()}", `, (err) => { 
    //         if (err) throw err; 
    //         console.log('The id was appended to the file!'); 
    //     }); 
    // }

    // Update 
    const updateDoc = {
        $set: {
          favourites: getRandom(itemsId, 20)
    }};

    const filter = {
        _id: new ObjectId("65bae495a09dc7347b48c753")
    }

    const result = await items.updateMany(filter, updateDoc);
    console.log(`Updated ${result.modifiedCount} documents`);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);