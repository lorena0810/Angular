import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ChangedPriceService } from './service/changed-price.service';
import{map} from 'rxjs/operators'; //recorre la data antes de ...

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class AppComponent implements OnInit {

    productDialog: boolean;

    products: any[]; //cualquier tipo de dato 

    product: Product;

    selectedProducts: Product[];

    submitted: boolean;

    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService, private changedPriceService:ChangedPriceService)  { }

    ngOnInit() { //lo primero que se ejecuta cuando carga el componente
       this.getProductNew()
        
    }
    
    getChangedPrice(){
        this.changedPriceService.getChangedPriceService().pipe(
            map((data:any[])=>{
                return data.map((item:any)=>{
                item.info.imageUrl=item.info.imageUrl.replace('<SIZE>','400')
                return item
                })
               
            })
        ).

        subscribe((data:any[]) => this.products = data) //obserbable
    }

    getProductNew(){
        this.changedPriceService.getProductNew().pipe(
            map((data:any[])=>{
                return data.map((item:any)=>{
                item.info.imageUrl=item.info.imageUrl.replace('<SIZE>','400')
                return item
                })
               
            })
        ).

        subscribe((data:any[]) => this.products = data) //obserbable
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = null;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editProduct(product: any) {
        this.product = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => { //acepta el parametro de woocomerce_id del codigo
                this.changedPriceService.deleteProduct(product.woocomerce_id).subscribe(()=>{
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'El producto se elimino', life: 3000});
                },()=>{
                    this.messageService.add({severity:'error', summary: 'error', detail: 'Fallo al eliminar el producto', life: 3000});
                })
                this.product = {};
               
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    
    saveProduct() {
        this.submitted = true;
        this.changedPriceService.postActualizarProduct(this.product).subscribe(()=>{
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Producto Actualizado', life: 3000});
            this.productDialog = false;
            },()=>{
                this.messageService.add({severity:'error', summary: 'error', detail: 'Producto no Actulizado', life: 3000});
            })
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}

