# Product App Angular Project

This is a project that demonstrates that basic usage of Angular's functionality to create a product catalog. It explores various Angular features such as components, services, routing, RxJS and more.

## Setup

To perform the initial setup of the project, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `ng serve` to start the development server

## Project Structure

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── product-card/
│   │   │   ├── product-card.component.ts
│   │   │   ├── product-card.component.html
│   │   │   ├── product-card.component.css
│   │   ├── product-list/
│   │   │   ├── product-list.component.ts
│   │   │   ├── product-list.component.html
│   │   │   ├── product-list.component.css
│   │   ├── product-detail/
│   │   │   ├── product-detail.component.ts
│   │   │   ├── product-detail.component.html
│   │   │   ├── product-detail.component.css
│   ├── models/
│   │   └── product.ts
│   ├── services/
│   │   └── product.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.routes.ts
├── assets/
│   └── [product images...]
├── styles.css
├── index.html
├── main.ts
```

## Functionality Test

Follow these steps to verify the main features of the application through the browser:

1. **Start the App**

   - Run `ng serve` and open [http://localhost:4200](http://localhost:4200) in browser.

2. **View Product List**

   - It redirects to `/products` and shows a list of product cards, each showing name, price, and image.

3. **Test ProductCardComponent**

   - Each product card displays the product's name, price, and description.
   - Click the **"Add to Cart"** button on any product card.
   - Check the browser console for a message confirming the product was added (verifies `@Output()` event).

4. **Test Routing & Navigation**

   - Click the **"View Details"** button on any product card.
   - You should be navigated to `/products/:id` (like `/products/1`).
   - The product detail page displays all details for the selected product.
   - If you manually enter an invalid product ID in the URL (e.g., `/products/50`), an error "Product not found" message is displayed.

5. **Test Data Handling**

   - The product list and detail pages should load data instantly (from the hardcoded service).
   - Refresh the page on any route to ensure data still loads (verifies use of RxJS Observable).
