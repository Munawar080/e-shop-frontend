import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { ProductList, Products } from 'src/app/models/product-list';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories$: any;
  product!: any;
  key: any;

  @ViewChild('form', { read: NgForm }) form: HTMLElement | undefined;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  save(form: NgForm) {
    if (this.key) this.productService.update(this.key, this.product);
    else this.productService.create(form.value);

    this.route.navigate(['/admin/products']);
  }
  delete() {
    if (!confirm('Are you sure you want to delete item')) return;

    this.productService.delete(this.key);
    this.route.navigate(['/admin/products']);
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();
    this.key = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.key) {
      this.productService
        .get(this.key)
        .pipe(take(1))
        .subscribe((list) => {
          this.product = list;
        });
    } else this.product = [];
  }
}
