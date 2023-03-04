const ROOT_TABS = document.getElementById('tabs');
const ROOT_PRODUCTS = document.getElementById('products');
const PRODUCTS = [
  { productId: 1, productName: 'Товар 1', categoryId: 1 },
  { productId: 2, productName: 'Товар 2', categoryId: 2 },
  { productId: 3, productName: 'Товар 3', categoryId: 3 },
  { productId: 4, productName: 'Товар 4', categoryId: 4 },
  { productId: 5, productName: 'Товар 5', categoryId: 5 },
  { productId: 6, productName: 'Товар 6', categoryId: 1 },
  { productId: 7, productName: 'Товар 7', categoryId: 2 },
  { productId: 8, productName: 'Товар 8', categoryId: 3 },
  { productId: 9, productName: 'Товар 9', categoryId: 4 },
  { productId: 10, productName: 'Товар 10', categoryId: 5 },
  { productId: 11, productName: 'Товар 11', categoryId: 1 },
  { productId: 12, productName: 'Товар 12', categoryId: 2 },
  { productId: 13, productName: 'Товар 13', categoryId: 3 },
  { productId: 14, productName: 'Товар 14', categoryId: 4 },
  { productId: 15, productName: 'Товар 15', categoryId: 5 },
  { productId: 16, productName: 'Товар 16', categoryId: 1 },
  { productId: 17, productName: 'Товар 17', categoryId: 2 },
  { productId: 18, productName: 'Товар 18', categoryId: 3 },
  { productId: 19, productName: 'Товар 19', categoryId: 4 },
  { productId: 20, productName: 'Товар 20', categoryId: 5 },
  { productId: 21, productName: 'Товар 21', categoryId: 1 },
  { productId: 22, productName: 'Товар 22', categoryId: 2 },
  { productId: 23, productName: 'Товар 23', categoryId: 3 },
  { productId: 24, productName: 'Товар 24', categoryId: 4 },
  { productId: 25, productName: 'Товар 25', categoryId: 5 },
];
const CATEGORIES = [
  { categoryId: 1, categoryName: 'Футболки' },
  { categoryId: 2, categoryName: 'Майки' },
  { categoryId: 3, categoryName: 'Носки' },
  { categoryId: 4, categoryName: 'Джинсы' },
  { categoryId: 5, categoryName: 'Брюки' },
];

function renderCategories() {
  let htmlTabsItem = '';

  CATEGORIES.forEach(({ categoryId, categoryName }) => {
    htmlTabsItem += `
      <li class="tabs__item" data-category-id="${categoryId}">
        <div class="tabs__link">${categoryName}</div>
      </li>
    `;
  });

  const htmlTabs = `
    <ul class="tabs">
      ${htmlTabsItem}
    </ul>
  `;

  ROOT_TABS.innerHTML = htmlTabs;
}

function clearActiveClasses() {
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
}

function renderProducts(categoryId) {
  let htmlProductItem = '';

  const filtered = PRODUCTS.filter(
    (product) => product.categoryId == categoryId
  );

  filtered.forEach(({ productId, productName, categoryId }) => {
    htmlProductItem += `
      <div class="products__item product" id="${categoryId}">
        <div class="product__image">
          <img src="./img/tovar.jpg" alt="tovar${productId}" />
        </div>
        <div class="product__name">${productName}</div>
      </div>
    `;
  });

  const htmlProducts = `
    <div class="products">
      ${htmlProductItem}
    </div>
  `;

  ROOT_PRODUCTS.innerHTML = htmlProducts;
}

renderCategories();

const tabs = document.querySelectorAll('.tabs__item');
if (tabs.length > 0) {
  tabs[0].classList.add('active');
  renderProducts(tabs[0].dataset.categoryId);

  for (const tab of tabs) {
    tab.addEventListener('click', () => {
      clearActiveClasses();
      tab.classList.add('active');
      renderProducts(tab.dataset.categoryId);
    });
  }
}
