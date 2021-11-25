import { makeAutoObservable } from "mobx";
import React, { createContext, FC } from "react";
import {
  addsNewItem,
  createsNewSession,
  getAllItems,
  removeItem,
  toggleItem,
} from "../api";
import { ProductModel } from "../moduls/product";

const storageKey = "token";

export class ProductStore {
  products: ProductModel[] = [];
  productCategories: string[] = ["Еда", "Вода", "Быт"];
  loading: boolean = false;
  authorizationState: boolean = false;
  checkSelector: boolean = false;
  selectedCategory: string = "";
  productName: string = "";
  productPrice: string = "";
  token: string = "";
  sessionId: number = 0;
  checkCategoty: boolean = true;

  constructor() {
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
      this.token = storedItems;
      this.setAuthorization();
    }
    makeAutoObservable(this);
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(storageKey, this.token);
    });
  }

  authorization = () => {
    createsNewSession().then((date) => {
      if (date) {
        this.token = date.token;
        this.setAuthorization();
      }
    });
  };

  unpackToken() {
    let base64Url = this.token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    let unpckToken = JSON.parse(jsonPayload);
    this.sessionId = unpckToken.tokenId;
  }

  handleProductsCreation(data: ProductModel[]) {
    this.products = data;
  }

  getProductList() {
    getAllItems(this.token)
      .then((data) => {
        if (data === "not authorized") {
          this.setAuthorization();
        } else {
          this.handleProductsCreation(data);
          this.unpackToken();
        }
      })
      .finally(() => {
        this.setLoading();
        this.sortingProducts();
      });
  }

  setAuthorization() {
    this.authorizationState = !this.authorizationState;
  }

  setCategory(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.currentTarget.textContent) {
      this.selectedCategory = e.currentTarget.textContent;
      this.checkCategoty = true;
    }
  }

  setProductName(e: React.ChangeEvent<HTMLInputElement>) {
    this.productName = e.target.value;
  }

  setProductPrice(e: React.ChangeEvent<HTMLInputElement>) {
    this.productPrice = e.target.value;
  }

  toggleSelector = () => {
    this.checkSelector = !this.checkSelector;
  };

  closeSelector() {
    this.checkSelector = false;
  }

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.selectedCategory && this.productName && this.productPrice) {
      this.createNewProductItem();
      this.checkCategoty = true;
    } else if (!this.selectedCategory) {
      this.checkCategoty = false;
    }
  };

  handleNewProductCreation(data: ProductModel) {
    this.products.push(data);
  }

  createNewProductItem() {
    this.setLoading();
    let newProduct = {
      id: 0,
      title: this.productName,
      kind: this.selectedCategory,
      price: +this.productPrice,
      done: false,
    };

    addsNewItem(newProduct, this.token)
      .then((data) => {
        if (data) {
          this.handleNewProductCreation(data);
        }
      })
      .finally(() => {
        this.resetValueProduct();
        this.setLoading();
        this.sortingProducts();
      });
  }

  resetValueProduct() {
    this.productName = "";
    this.selectedCategory = "";
    this.productPrice = "";
  }

  completeProduct(product: ProductModel) {
    this.toggleProductDone(product);
    toggleItem(product.id, this.token)
      .then((date) => {
        if (!date) {
          this.toggleProductDone(product);
        }
      })
      .finally(() => {
        this.sortingProducts();
      });
  }

  toggleProductDone(product: ProductModel) {
    product.done = !product.done;
  }

  removeProduct(id: number) {
    this.setLoading();
    removeItem(id, this.token)
      .then((data) => {
        if (data) {
          this.handleRemoveProduct(id);
        }
      })
      .finally(() => {
        this.setLoading();
        this.sortingProducts();
      });
  }

  handleRemoveProduct(id: number) {
    this.products = this.products.filter((el) => el.id !== id);
  }

  sortingProducts() {
    this.products.sort(this.sortingOptions);
  }

  sortingOptions = (a: ProductModel, b: ProductModel) => {
    if (a.done === true && b.done === false) {
      return 1;
    } else if (a.done === false && b.done === true) {
      return -1;
    } else if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    } else if (
      a.kind === this.productCategories[0] &&
      b.kind !== this.productCategories[0]
    ) {
      return -1;
    } else if (
      a.kind !== this.productCategories[0] &&
      b.kind === this.productCategories[0]
    ) {
      return 1;
    } else if (
      a.kind === this.productCategories[1] &&
      b.kind !== this.productCategories[1]
    ) {
      return -1;
    } else if (
      a.kind !== this.productCategories[1] &&
      b.kind === this.productCategories[1]
    ) {
      return 1;
    } else if (
      a.kind === this.productCategories[2] &&
      b.kind !== this.productCategories[2]
    ) {
      return -1;
    } else if (
      a.kind !== this.productCategories[2] &&
      b.kind === this.productCategories[2]
    ) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else return 0;
  }

  setLoading() {
    this.loading = !this.loading;
  }
}

export const ProductStoreContext = createContext({} as ProductStore);

export const ProductStoreProvider: FC = (props) => {
  const store = new ProductStore();
  return (
    <ProductStoreContext.Provider value={store}>
      {props.children}
    </ProductStoreContext.Provider>
  );
};
