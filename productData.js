const products = [
  //phones
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra 5G",
    category: "phones",
    price: 124999,
    description: `More innovation, less footprint – Galaxy S23 Ultra's striking symmetrical design returns with one major difference: recycled and eco-conscious materials. From the metal frame to the glass finish, it's polished with fresh new colors inspired by nature.
    Note's signature tool comes built in - The built-in S Pen keeps the legacy of Note alive. Plus, it helps you ditch the dependency on notebooks, making sketches and jotting notes effortless and eco-friendly.
    Low light. Camera. Action - A Pro-grade Camera grabs brighter photos and video, dusk to dawn. The intelligent pixel sensor adapts to low light with Nightography and the camera lens tones down flare for clearer captures
    200MP. Wow-worthy resolution - Resolution on the Wide-angle Camera has nearly doubled, delivering strikingly clear photos. Zoom and crop your shots for a whole new view —or leave it intact for brilliant detail, corner to corner.
    Power for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery`,
    imageUrl: "https://m.media-amazon.com/images/I/61j99uUfXNL._SX522_.jpg",
  },
  {
    id: 2,
    name: "OnePlus 11 5G",
    category: "phones",
    price: 61999,
    description: `Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support
    Camera Modes: Photo, Video, Night, PRO, PANO, Portrait, TIME-LAPSE, SLO-MO, Text scanner, Movie, Long Exposure, Dual-view video, TILT-SHIFT, XPAN, Scan, STICKER, and AI ID photo
    Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming
    Operating System: OxygenOS based on Android 13
    Processor: Snapdragon 8 Gen 2 Mobile Platform
    16GB LPDDR5X RAM, 256GB UFS4.0 Storage
    Battery & Charging: 5000 mAh with 100W SUPERVOOC
    In-Display Fingerprint Sensor`,
    imageUrl:
      "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy Z Fold4 5G",
    category: "phones",
    price: 14999,
    description: `Stands out. Stands up. Unfolds. The Galaxy Z Fold4 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means there's more screen and no black dot getting between you and the breathtaking Infinity Flex Display.
    Do more than more with Multi View. Whether toggling between texts or catching up on emails, take full advantage of the expansive Main Screen with Multi View. PC-like power in your pocket transforms apps optimized with One UI to give you menus and more in a glance
    New Taskbar for PC-like multitasking. Wipe out tasks in fewer taps. Add apps to the Taskbar for quick navigation and bouncing between windows when you're in the groove.4 And with App Pair, one tap launches up to three apps, all sharing one super-productive screen
    Our toughest Samsung Galaxy foldables ever. From the inside out, Galaxy Z Fold4 is made with materials that are not only stunning, but stand up to life's bumps and fumbles. The front and rear panels, made with exclusive Corning Gorilla Glass Victus+, are ready to resist sneaky scrapes and scratches. With our toughest aluminum frame made with Armor Aluminum, this is one durable smartphone.
    World’s first water resistant foldable smartphones. Be adventurous, rain or shine. You don't have to sweat the forecast when you've got one of the world's first water-resistant foldable smartphones.
    `,
    imageUrl: "https://m.media-amazon.com/images/I/61cInRWmClL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "Apple iPhone 13",
    category: "phones",
    price: 61999,
    description: `15 cm (6.1-inch) Super Retina XDR display
    Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
    Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    A15 Bionic chip for lightning-fast performance`,
    imageUrl: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg",
  },
  {
    id: 5,
    name: "Apple iPhone 14",
    category: "phones",
    price: 76999,
    description: `15.40 cm (6.1-inch) Super Retina XDR display
    Advanced camera system for better photos in any light
    Cinematic mode now in 4K Dolby Vision up to 30 fps
    Action mode for smooth, steady, handheld videos
    Vital safety technology — Crash Detection calls for help when you can’t
    All-day battery life and up to 20 hours of video playback
    Industry-leading durability features with Ceramic Shield and water resistance
    `,
    imageUrl: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
  },
  {
    id: 6,
    name: "Apple iPhone 14 Plus",
    category: "phones",
    price: 80999,
    description: `16.95 cm (6.7-inch) Super Retina XDR display
    Advanced camera system for better photos in any light
    Cinematic mode now in 4K Dolby Vision up to 30 fps
    Action mode for smooth, steady, handheld videos
    Vital safety technology — Crash Detection calls for help when you can’t
    All-day battery life and up to 26 hours of video playback
    Industry-leading durability features with Ceramic Shield and water resistance`,
    imageUrl: "https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg",
  },
  {
    id: 7,
    name: "Apple iPhone 14 Pro",
    category: "phones",
    price: 119999,
    description: `15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion
    Dynamic Island, a magical new way to interact with iPhone
    48MP Main camera for up to 4x greater resolution
    Cinematic mode now in 4K Dolby Vision up to 30 fps
    Action mode for smooth, steady, handheld videos
    All-day battery life and up to 23 hours of video playback
    Vital safety technology — Crash Detection calls for help when you can’t`,
    imageUrl: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
  },
  {
    id: 8,
    name: "Apple iPhone 14 Pro Max",
    category: "phones",
    price: 141990,
    description: `17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion
    Dynamic Island, a magical new way to interact with iPhone
    48MP Main camera for up to 4x greater resolution
    Cinematic mode now in 4K Dolby Vision up to 30 fps
    Action mode for smooth, steady, handheld videos
    All-day battery life and up to 29 hours of video playback
    Vital safety technology — Crash Detection can detect a severe car crash and call for help`,
    imageUrl: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
  },
  {
    id: 9,
    name: "iQOO 11 5G",
    category: "phones",
    price: 59999,
    description: `Snapdragon 8 Gen 2 Mobile Platform adopts TSMC 4NM process which has 10% higher CPU peak performance and 20% higher GPU peak performance than Snapdragon 8+ Gen 1. Also, equipped with LPDDR5X RAM & UFS 4.0 storage.
    The 2K AMOLED display has 77.8% more pixels than the 1080P display. E6 Performs much better than E4 in terms of power consumption and brightness. 25% less in Power Consumption and 1800 nits Local Peak Brightness
    iQOO 11's 120W FlashCharge charges 50% battery in just 8 mins and 100% battery in just 25 mins
    V2 Chip provides better gaming and photography experience. It can increase the frame rate from 45fps/ 60fps to 90fps & 120fps respectively. It also facilitates users to shoot better night videos/ photos.
    GN5 sensor's dual pixel pro technology improves the autofocus function of the phone. The sensor is 50 MP in resolution.`,
    imageUrl: "https://m.media-amazon.com/images/I/71ZeuCAbcSL._SL1200_.jpg",
  },
  {
    id: 10,
    name: "iQOO Neo 7 5G",
    category: "phones",
    price: 28999,
    description: `MediaTek Dimensity 8200 5G Mobile platform adopts TSMC 4nm process and has excellent Power Efficiency Performance. Also, Equipped with the LPDDR5 RAM & UFS 3.1 Storage.
    The 120W FlashCharge charges from 1% to 50% in just 10 minutes (25 minutes for a full charge)
    Motion Control powered by Gyroscope & Acceleration Sensors to give 6 additional Phone movement-based control options while Gaming
    6.78” 120Hz AMOLED Display with HDR 10+ Certification, Netflix HDR Support & 1300 Nits Peak Brightness
    64MP OIS Camera, Dual Stereo Speakers, X-Axis Linear Motor and Extended RAM 3.0 (8GB+8GB)`,
    imageUrl: "https://m.media-amazon.com/images/I/61JS7lF2aqL._SL1200_.jpg",
  },
  {
    id: 11,
    name: "Xiaomi 13 Pro",
    category: "phones",
    price: 79999,
    description: `50MP Leica professional optics helps in capture images in great detail. The largest camera sensor on a smartphone - Sony IMX989 1 inch sensor with 3.2 μm large pixels captures brighter images even in extreme lowlight. The 50MP Telephoto-Macro(75mm Leica portrait) and 50MP Ultra-wide lens enables you to capture in different perspectives. Xiaomi 13 Pro can supports 8K video recording and also can record in Dolby Vision for a professional cinematography experience. The high resolution 32MP front camera comes with smart FoV switching
    The 6.73 inch 2K 120Hz E6 AMOLED display with a peak brightness of 1900nits meets the most demanding needs and provides the best viewing experience. The 10bit LTPO 3.0 display is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus
    The flagship Snapdragon 8 Gen 2, 4nm processor is designed to provide groundbreaking performance. The processor has 37% improved multi-core CPU performance over the previous generation. The processor is coupled with faster UFS 4.0 Storage and LPDDR5X RAM for extreme performance. The super-big 3400mm² vapour chamber helps in keeping the phone temperatures in check even at peak performance`,
    imageUrl: "https://m.media-amazon.com/images/I/41n0qlda6gL._SX522_.jpg",
  },
  {
    id: 12,
    name: "OnePlus 11R 5G",
    category: "phones",
    price: 39999,
    description: `Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support.
    Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode
    Display: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+
    Operating System: OxygenOS based on Android 13
    Processor: Snapdragon 8+ Gen 1 Mobile Platform
    8GB LPDDR5X RAM, 128GB UFS3.1 STORAGE
    Battery & Charging: 5000 mAh with 100W SuperVOOC
    In-Display Fingerprint Sensor`,
    imageUrl: "https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg",
  },
  {
    id: 13,
    name: "OnePlus 10 Pro 5G",
    category: "phones",
    price: 59999,
    description: `Camera: 48MP Main Camera with Sony IMX 789 Lens (OIS enabled), 50MP Ultra-wide angle camera & 8MP Tele photo lens; Front (Selfie) Camera: 32MP; Flash: Dual LED
    Camera Features: Hasselblad Camera for Mobile, Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama Mode, Tilt-Shift mode, Long Exposure Mode, 150° Wide angle Mode, Dual-View Video, Movie Mode, Xpan Mode, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse
    Display: 6.7 Inches; 120 Hz QHD+ Fluid AMOLED with LTPO; Resolution: 3216 x 1440; Aspect Ratio: 20:9
    Display Features: Nature tone display, Video colour enhancer, Colour personalization, Colour vision enhancement, Auto brightness, Manual brightness, Screen colour temperature, Bright HDR video mode, Night Mode, Multi-brightness colour calibration, Vibrant Colour Effect Pro, Ultra high resolution video
    Operating System: Oxygen OS based on Android 12. 1400°C Heat-tested, 30% higher wear-resistance
    Processor: Qualcomm Snapdragon 8 Gen 1
    Battery & Charging: 5000 mAh with 80W SuperVOOC`,
    imageUrl: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
  },
  {
    id: 14,
    name: "Vivo V23 5G",
    category: "phones",
    price: 28389,
    description: `8 GB RAM | 128 GB ROM
    16.36 cm (6.44 inch) Full HD+ Display
    64MP + 8MP + 2MP | 50MP + 8MP Dual Front Camera
    4200 mAh Lithium Battery
    Mediatek Dimensity 920 Processor
    Connector type: 3.5mm jack`,
    imageUrl: "https://m.media-amazon.com/images/I/61dNmq2ZZeL._SL1500_.jpg",
  },
  {
    id: 15,
    name: "Xiaomi 12 Pro",
    category: "phones",
    price: 44999,
    description: `The Pro-grade triple 50MP camera array unleashes the true power of a triple-camera setup. The large 50MP Sony IMX707 captures upto 120% more light. The 50MP Telephoto & 50MP Ultra-wide enable you to enjoy a top-class cinematography experience. The 32MP front facing camera is segment best.
    The 6.73'' WQHD+ 120Hz AMOLED display with AdaptiveSync Pro is a master in clarity, brightness and smoothness. The display is certified A+ by DisplayMate & is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus and comes with a In-display fingerprint sensor
    The flagship Snapdragon 8 Gen 1, 4nm processor is designed to provide groundbreaking performance. The super-big 2900mm² vapour chamber, along with three layers of massive graphite sheets provides an advanced cooling system.
    `,
    imageUrl: "https://m.media-amazon.com/images/I/71vNgTH3MzL._SL1500_.jpg",
  },
  {
    id: 16,
    name: "Google Pixel 6a 5G",
    category: "phones",
    price: 30940,
    description: `Pixel 6a adapts to you; it’s super fast and secure and powered by Tensor, the first chip designed just for Pixel
    Pixel’s fast-charging all-day battery adapts to you and saves power for the apps you use most
    Take amazing photos with Pixel’s 12 megapixel camera and tools like Magic Eraser, Motion Mode, and Portrait Mode
    With Tensor, your phone launches apps fast, pages and images load quickly, and everything runs smoothly
    Live Translate helps you translate live video captions, private chats, and messages, and signs in up to 55 languages right on your cell phone`,
    imageUrl: "https://m.media-amazon.com/images/I/314423cfIVL.jpg",
  },
  {
    id: 17,
    name: "Samsung Galaxy S23 Plus 5G",
    category: "phones",
    price: 104999,
    description: `More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightography's enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again.
    Designed with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film.
    Power for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.`,
    imageUrl: "https://m.media-amazon.com/images/I/61bM8Mojf6L._SL1500_.jpg",
  },
  {
    id: 18,
    name: "Google Pixel 6 Pro 5G",
    category: "phones",
    price: 43990,
    description: `Introducing Pixel 6 Pro, the completely redesigned, fully loaded Google 5G cell phone.[1] With a powerful camera system, next-gen security, and the custom Google Tensor processor, it’s the smartest and fastest Pixel yet.[2] And it’s an unlocked Android smartphone, so you can choose the data plan and carrier that work for you.[1] [1] Works with all major carriers. Contact carrier for details. 5G service is carrier dependent. Requires a 5G data plan (sold separately). 5G service not available on all carrier networks or in all areas. Contact carrier for details. 5G service, speed and performance depend on many factors, including carrier network capabilities and signal strength. Actual results may vary. Some features not available in all areas. Data rates may apply. See g.co/pixel/networkinfo for info. [2] Compared to Pixel 5. Based on internal CPU benchmark testing on pre-production devices. [3] Compared to main rear camera on Pixel 5. [4] Image simulated. Magic Eraser may not work on all image elements. [5] Deblurring may not work on all photos or videos with faces. [6] Fast wired charging rates are based upon use of the Google 30W USB-C Charger plugged into a wall outlet. Compatible with USB PD 3.0 PPS adapters. Actual results may be slower. Adapters sold separately.`,
    imageUrl: "https://m.media-amazon.com/images/I/71FpXTBHDnL._SL1500_.jpg",
  },
  {
    id: 19,
    name: "Google Pixel 7a 5G",
    category: "phones",
    price: 42500,
    description: `Google Pixel 7a is fast and efficient, with 8 GB of RAM, an amazing camera, and features rated highest in security[1]
    Pixel’s fast-charging all-day battery can last over 24 hours, or up to 72 hours when you turn on Extreme Battery Saver[2]; it also charges wirelessly
    With the Pixel Camera and Google Tensor G2’s advanced image processing, it’s easy to take great pictures in low light, fix blurry images, and remove distractions with a few taps in Google Photos[3]
    With Pixel Call Assist, you can get help making calls, avoiding spammers, and waiting on hold[4]; plus, Pixel 7a can filter out your caller’s background noise so you can hear them clearly even in noisy places
    Open your Pixel 7a quickly and securely with Face Unlock or Fingerprint Unlock`,
    imageUrl: "https://m.media-amazon.com/images/I/51tVQZ8XCxL._SL1024_.jpg",
  },
  {
    id: 20,
    name: "Google Pixel 7 5G",
    category: "phones",
    price: 45350,
    description: `Google Pixel 7 is fast and efficient, with 12 GB of RAM, an amazing camera, and features rated highest in security[1]
    Pixel’s fast-charging all-day battery can last over 24 hours, or up to 72 hours when you turn on Extreme Battery Saver[2]; it also charges wirelessly
    With the Pixel Camera and Google Tensor G2’s advanced image processing, it’s easy to take great pictures in low light, fix blurry images, and remove distractions with a few taps in Google Photos[3]
    With Pixel Call Assist, you can get help making calls, avoiding spammers, and waiting on hold[4]; plus, Pixel 7a can filter out your caller’s background noise so you can hear them clearly even in noisy places
    Open your Pixel 7a quickly and securely with Face Unlock or Fingerprint Unlock`,
    imageUrl: "https://m.media-amazon.com/images/I/51jahbKN6AL._SL1500_.jpg",
  },
  // Laptops
  {
    id: 21,
    name: "Apple 2020 MacBook Air Laptop M1 chip",
    category: "laptops",
    price: 79990,
    description: `All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
        Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
        Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
        Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.`,
    imageUrl: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
  },
  {
    id: 22,
    name: "Apple 2020 MacBook Pro 13.3-inch",
    category: "laptops",
    price: 115999,
    description: `Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance
        Get more done with up to 20 hours of battery life, the longest ever in a Mac
        8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever
        8-core GPU with up to 5x faster graphics for graphics-intensive apps and games
        16-core Neural Engine for advanced machine learning
        8GB of unified memory so everything you do is fast and fluid
        Superfast SSD storage launches apps and opens files in an instant`,
    imageUrl: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
  },
  {
    id: 23,
    name: "Apple 2021 MacBook Pro 14-inch",
    category: "laptops",
    price: 175999,
    description: `Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance
        Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever
        Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games
        16-core Neural Engine for up to 11x faster machine learning performance
        Longer battery life, up to 17 hours
        Up to 64GB of unified memory so everything you do is fast and fluid
        Up to 8TB of super-fast SSD storage launches apps and opens files in an instant`,
    imageUrl: "https://m.media-amazon.com/images/I/61vFO3R5UNL._SL1500_.jpg",
  },
  {
    id: 24,
    name: "Apple 2021 MacBook Pro 16-inch",
    category: "laptops",
    price: 235999,
    description: `Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance
    Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever
    Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games
    16-core Neural Engine for up to 5x faster machine learning performance
    Longer battery life, up to 21 hours
    Up to 64GB of unified memory so everything you do is fast and fluid
    Up to 8TB of super-fast SSD storage launches apps and opens files in an instant`,
    imageUrl: "https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg",
  },
  {
    id: 25,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 26,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 27,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 28,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 29,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 30,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 31,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 32,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 33,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 34,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 35,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 36,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 37,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 38,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 39,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },
  {
    id: 40,
    name: "",
    category: "laptops",
    price: 149999,
    description: ``,
    imageUrl: "",
  },

  // Toys
  {
    id: 41,
    name: "LEGO Star Wars Millennium Falcon",
    category: "toys",
    price: 9999,
    description: "Build the iconic Millennium Falcon from Star Wars...",
    imageUrl: "https://m.media-amazon.com/images/I/91BP3GhLyVL._AC_SL1500_.jpg",
  },
  {
    id: 42,
    name: "Barbie Dreamhouse",
    category: "toys",
    price: 17999,
    description: "The Barbie Dreamhouse is the ultimate dream...",
    imageUrl: "https://m.media-amazon.com/images/I/91wE8Yo3CXL._AC_SL1500_.jpg",
  },
  // ... 18 more toy products

  // Tools
  {
    id: 61,
    name: "Bosch 18V Cordless Drill/Driver Kit",
    category: "tools",
    price: 14999,
    description: "Powerful and versatile cordless drill/driver kit...",
    imageUrl: "https://m.media-amazon.com/images/I/81dzM4jqn1L._AC_SL1500_.jpg",
  },
  {
    id: 62,
    name: "DEWALT 20V MAX Combo Kit",
    category: "tools",
    price: 24999,
    description: "The DEWALT 20V MAX Combo Kit includes...",
    imageUrl: "https://m.media-amazon.com/images/I/71sh+bJ2RyL._AC_SL1500_.jpg",
  },
  // ... 18 more tool products

  // Kitchen
  // ... Add 20 kitchen products

  // Home Appliances
  // ... Add 20 home appliance products

  // Clothing
  // ... Add 20 clothing products

  // Sports
  // ... Add 20 sports products

  // Furniture
  // ... Add 20 furniture products

  // Bags
  // ... Add 20 bag products
];

export default products;
