const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const books = await response.json();

    await new Promise(resolve => setTimeout(resolve, 1000));
    document.querySelector('#loading').remove();

    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.alignItems = "center";

    books.forEach(book => {
      const bookDiv = document.createElement("div");

      const year = new Date(book.released).getFullYear();

      bookDiv.innerHTML = `
        <h3>${book.name}</h3>
        <p>by ${book.authors.join(", ")}</p>
        <p>${year}</p>
        <p>${book.numberOfPages} pages</p>
      `;

      bookDiv.style.marginBottom = "40px";
      bookDiv.style.textAlign = "center";

      app.appendChild(bookDiv);
    });

  } catch (error) {
    console.log(error);
  }
};

fetchData(url);