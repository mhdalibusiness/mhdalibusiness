const business_images_name = ["ai_generation.jpg" , "my_desktop.jpg" , "my_desktop2.jpg" , "my_image.jpg" , "syria_present.jpg"];
const montan_images_name = ["ai_generation.jpg" , "my_desktop.jpg" , "my_desktop2.jpg" , "my_image.jpg" , "syria_present.jpg"];
const programming_images_name = ["ai_generation.jpg" , "my_desktop.jpg" , "my_desktop2.jpg" , "my_image.jpg" , "syria_present.jpg"];
const graphic_desin_images_name = ["ai_generation.jpg" , "my_desktop.jpg" , "my_desktop2.jpg" , "my_image.jpg" , "syria_present.jpg"];
const blog_images_name = ["ai_generation.jpg" , "my_desktop.jpg" , "my_desktop2.jpg" , "my_image.jpg" , "syria_present.jpg"];

// تعبئة صور البزنس
const businessDiv = document.getElementById("business");

business_images_name.forEach(name => {
    const img = document.createElement("img");

    // the path!
    img.src = `images/${name}`;

    // the alt
    img.alt = name;

    // add a class
    img.classList.add("skills_image");

    // add the tag
    businessDiv.appendChild(img);
});

// تعبئة صور المنتاج
const montanDiv = document.getElementById("montan");

montan_images_name.forEach(name => {
    const img = document.createElement("img");

    // the path!
    img.src = `images/${name}`;

    // the alt
    img.alt = name;

    // add a class
    img.classList.add("skills_image");

    // add the tag
    montanDiv.appendChild(img);
});

// تعبئة صور البرمحة
const programmingDiv = document.getElementById("programming");

programming_images_name.forEach(name => {
    const img = document.createElement("img");

    // the path!
    img.src = `images/${name}`;

    // the alt
    img.alt = name;

    // add a class
    img.classList.add("skills_image");

    // add the tag
    programmingDiv.appendChild(img);
});

// تعبئة صور التصميم
const graphiDesincDiv = document.getElementById("graphic_desin");

graphic_desin_images_name.forEach(name => {
    const img = document.createElement("img");

    // the path!
    img.src = `images/${name}`;

    // the alt
    img.alt = name;

    // add a class
    img.classList.add("skills_image");

    // add the tag
    graphiDesincDiv.appendChild(img);
});

// تعبئة صور المدونة
const blogDiv = document.getElementById("blog");

blog_images_name.forEach(name => {
    const img = document.createElement("img");

    // the path!
    img.src = `images/${name}`;

    // the alt
    img.alt = name;

    // add a class
    img.classList.add("skills_image");

    // add the tag
    blogDiv.appendChild(img);
});