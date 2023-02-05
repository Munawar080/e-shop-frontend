import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}
  create(product: any) {
    this.db.list("/products").push(product);
  }
  getAll() {
    return this.db.list("/products").snapshotChanges();
  }
  get(productId: any) {
    return this.db.object("/products/" + productId).valueChanges();
  }
  update(productId: string, product: {}) {
    return this.db.object("/products/" + productId).update(product);
  }
  delete(productId: any) {
    return this.db.object("/products/" + productId).remove();
  }
}
