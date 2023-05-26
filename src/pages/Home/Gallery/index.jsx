import React from "react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image:
        "https://lzd-img-global.slatic.net/g/p/4a9d0676ad84f8fdb2dd684a237aadf9.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 2,
      image: "https://i.ebayimg.com/images/g/-JYAAOSwJy5gJWnL/s-l500.jpg",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbnS4uRzZE-dAxqFaC-p6ZBPeRjaydapzA&usqp=CAU",
    },
    {
      id: 4,
      image: "https://img.fruugo.com/product/4/38/173634384_max.jpg",
    },
    {
      id: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0226/7339/1688/products/GreenToysMiniCar-ecotoysforpartybags.jpg?v=1627643454",
    },
    {
      id: 6,
      image:
        "https://cdn.shopify.com/s/files/1/2610/9472/products/BL2217_1.38_CONTINENTAL_GT3_PULL_BACK_TOY_BLACK_2048x2048.jpg?v=1606472112",
    },
    // Add more gallery items as needed
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center my-8">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative">
              <img src={item.image} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
