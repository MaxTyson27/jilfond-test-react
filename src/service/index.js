import { ROUTES } from "../api";
import { store } from "../store";
import { prepareQueryParams } from "../utils/prepareQuery";

class Service {
  store;

  constructor() {
    this.store = store;
  }

  resetEmployes = () => {
    this.store.setLoading(false);
    this.store.setError(false);
    this.store.setEmployes([]);
    this.store.selectEmployee(null);
  }

  setErrorRequest = () => {
    this.store.setError(true);
    this.store.setLoading(false);
  }

  getEmployes = async () => {
    try {
      if (!this.store.searchQuery) return this.resetEmployes()

      this.store.setError(false);

      const queryParams = prepareQueryParams(this.store.searchQuery);

      if (!queryParams) return this.resetEmployes()

      const response = await fetch(`${ROUTES.EMPLOYES}?${queryParams}`);

      if (!response.ok) {
        return this.setErrorRequest();
      }
      
      const employes = await response.json();

      this.store.setLoading(false);
      this.store.setEmployes(employes);
    } catch (err) {
      this.setErrorRequest();
    }
  };

}

export const service = new Service();
