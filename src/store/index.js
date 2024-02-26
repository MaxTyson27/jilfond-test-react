import { makeAutoObservable } from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  employes = []
  searchQuery = ''
  selectedEmployee = null
  isLoading = false
  isError = false

  setEmployes = (employes) => {
    this.employes = employes;
  }

  setError = (isError) => {
    this.isError = isError;
  }

  setLoading = (isLoading) => {
    this.isLoading = isLoading;
  }

  setSearchQuery = (query) => {
    this.searchQuery = query;
  }

  selectEmployee = (selectedId) => {
    this.selectedEmployee = this.employes.find(({ id }) => id === selectedId);
  }
}

export const store = new Store();