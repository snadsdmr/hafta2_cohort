// postListesi.js

const posts = [
    { title: "Post 1", content: "Bu benim ilk postum!" },
    { title: "Post 2", content: "Bugün hava çok güzel." },
];

function postlariListele() {
    console.log("Postlar:");
    posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title} - ${post.content}`);
    });
}

function yeniPostEkle(title, content) {
    posts.push({ title, content });
    console.log(`Yeni post eklendi: ${title}`);
}

// Önce mevcut postları göster
postlariListele();

// Yeni bir post ekleyelim
yeniPostEkle("Post 3", "Yeni post eklemeyi öğrendik!");

// Güncel post listesini tekrar gösterelim
postlariListele();
