import { ProductModel } from "./moduls/product";

export function createsNewSession() {
  return fetch("/api/v1/new-session", {
    method: "POST",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Bad request");
    })

    .catch((err) => {
      console.error(err);
    });
}

export function getAllItems(token: string) {
  return fetch("/api/v1/items", {
    method: "GET",
    headers: {
      "TODO-TOKEN": token,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        return "not authorized";
      }
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

export function addsNewItem(data: ProductModel, token: string) {
  return fetch("/api/v1/items", {
    method: "POST",
    headers: {
      "TODO-TOKEN": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

export function toggleItem(id: number, token: string) {
  return fetch(`/api/v1/item/${id}/toggle`, {
    method: "POST",
    headers: {
      "TODO-TOKEN": token,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return true;
      } else return false;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function removeItem(id: number, token: string) {
  return fetch(`/api/v1/item/${id}/delete`, {
    method: "POST",
    headers: {
      "TODO-TOKEN": token,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return true;
      } else return false;
    })
    .catch((error) => {
      console.log(error);
    });
}

