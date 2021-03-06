INSERT INTO products (name, description, price, rating, featured, image, inventory) VALUES
('Nvidia GeForce RTX 3080', 
'The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.',
699.00,
5,
true,
'https://m.media-amazon.com/images/I/81kf3+5l2LS._AC_SX450_.jpg',
0),
('AMD Radeon™ RX 6800 XT',
'The AMD Radeon™ RX 6800 XT graphics card, powered by AMD RDNA™ 2 architecture, featuring 72 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.',
649.00,
5,
true,
'https://drh1.img.digitalriver.com/DRHM/Storefront/Company/amd/images/product/thumbnail/663934-amd-radeon-rx-6800xt-box-100x100.png',
3),
('NVIDIA GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 Graphics Card - Steel and Black',
'The GeForce RTX 3060 Ti lets you take on the latest games using the power of Ampere—NVIDIA’s 2nd generation RTX architecture. Discover incredible performance with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory.',
399.99,
4.7,
true,
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439402cv11d.jpg;maxHeight=640;maxWidth=550',
5),
('ASUS GeForce GTX 1050 Ti 4GB Phoenix Fan Edition DVI-D HDMI DP 1.4 Gaming Graphics Card (PH-GTX1050TI-4G) Graphic Cards',
'The GeForce GTX 1050 graphics card is loaded with innovative new gaming technologies, making it the perfect choice for the latest high-definition games. Powered by NVIDIA Pascal ™—the most advanced GPU architecture ever created—the GeForce GTX 1060 delivers brilliant performance that opens the door to virtual reality and beyond. #GameReady.',
279.95,
3.4,
false,
'https://m.media-amazon.com/images/I/71eoMkl0sFL._AC_SY450_.jpg',
8);

INSERT INTO users (username, email, password, admin) VALUES
('bennyz',
'bennyzheng@pursuit.org',
'qwertyuiop',
true),
('test',
'test@test.org', 
'test', 
false),
('admin',
'admin@admin.org',
'admin',
true);

INSERT INTO transactions (user_id, product_id, transaction_complete, date) VALUES
('bennyz', 1, true,'2022-02-01'),
('bennyz', 2, false,'2022-02-07'),
('test', 1, false,'2022-01-28'),
('test', 2, true,'2022-02-01'),
('test', 3, false,'2022-02-10');
