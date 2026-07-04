// Complete Dataset for 5-member project weightage
const booksData = [
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Computer Science",
        cover: "https://alchetron.com/cdn/introduction-to-algorithms-91f68b36-498b-44c0-8634-def69c03b17-resize-750.jpeg",
        link: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/cormen2001algorithms.pdf"
    },
    {
        title: "Programming in ANSI C",
        author: "E. Balagurusamy",
        category: "Computer Science",
        cover: "https://tse3.mm.bing.net/th/id/OIP.KlQfqBw6a5SaamIfq2fCOQHaJ2?rs=1&pid=ImgDetMain&o=7&rm=3",
        link: "https://karadev.net/uroci/filespdf/files/Programming-in-ANSI-C.pdf"
    },
    {
        title: "Higher Engineering Mathematics",
        author: "B.S. Grewal",
        category: "Mathematics",
        cover: "https://m.media-amazon.com/images/I/61iPd6gxtOL.jpg",
        link: "https://www.slideshare.net/slideshow/higher-engineering-mathematics-by-bs-grewal/65781053"
    },
    {
        title: "Concepts of Physics",
        author: "H.C. Verma",
        category: "Physics",
        cover: "https://ecom.myedubag.com/image/cache/data/concept%201-600x800.jpg",
        link: "https://tripathistudyzone.weebly.com/uploads/5/2/6/4/52646781/concepts_of_physics_by_h.c._verma_volume_1.pdf"
    },
    {
        title: "Web Development & JavaScript",
        author: "Marijn Haverbeke",
        category: "Computer Science",
        cover: "https://m.media-amazon.com/images/I/81HqVRRwp3L._SL1500_.jpg",
        link: "https://www.kea.nu/files/textbooks/humblelearn2code/eloquentjavascript3rdedition.pdf"
    },
    {
        title: "Linear Algebra & Applications",
        author: "Gilbert Strang",
        category: "Mathematics",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348384442i/179699.jpg",
        link: ",https://rksmvv.ac.in/wp-content/uploads/2021/04/Gilbert_Strang_Linear_Algebra_and_Its_Applicatio_230928_225121.pdf"
    }
];

let currentCategory = "All";

// Function to render books based on list
function renderLibrary(books) {
    const grid = document.getElementById('bookGrid');
    grid.innerHTML = "";

    if (books.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: #7f8c8d;">
                            <h3>No Books Found Matching Your Query!</h3>
                          </div>`;
        return;
    }

    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="image-container">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-info">
                <span class="book-category">${book.category}</span>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">By ${book.author}</p>
                <a href="${book.link}" class="action-btn">Read E-Book</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search and search filter logic
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(query) || 
                              book.author.toLowerCase().includes(query);
        const matchesCategory = currentCategory === "All" || book.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    renderLibrary(filtered);
}

// Category filter buttons logic
function filterCategory(category) {
    currentCategory = category;
    
    // Update active button state visuals
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        if(tag.textContent === category || (category === 'All' && tag.textContent === 'All Books')) {
            tag.classList.add('active');
        } else {
            tag.classList.remove('active');
        }
    });

    // Filter books array
    const filtered = category === "All" ? booksData : booksData.filter(b => b.category === category);
    renderLibrary(filtered);
    
    // Reset search input on filter change
    document.getElementById('searchInput').value = "";
}

// Initial Load
window.onload = function() {
    renderLibrary(booksData);
};