import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {
  products: any[] = [
    { 
      name: 'Samsung +', 
      price: 1000, 
      imageURL: "https://th.bing.com/th/id/OIP.t0ZONdNsLpv7M0iYPNeDGQHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
      name: 'Iphone xR', 
      price: 1999, 
      imageURL: "https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg"  
    },
    // Add more products here.
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    // Implement logic to add the selected product to the cart (localStorage).
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
}
