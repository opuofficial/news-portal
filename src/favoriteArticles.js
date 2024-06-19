class FavoriteArticles {
  constructor() {
    this.error = null;
    this.dbInstance = null;
    this.openDB();
  }

  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("favoriteArticlesDB", 1);

      request.onerror = (event) => {
        this.error = event.target.error;
        reject(this.error);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore("articles", {
          keyPath: "url",
          autoIncrement: false,
        });
      };

      request.onsuccess = (event) => {
        this.dbInstance = event.target.result;
        resolve(this.dbInstance);
      };
    });
  }

  async addArticle(article) {
    if (!this.dbInstance) {
      await this.openDB();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.dbInstance.transaction(
        ["articles"],
        "readwrite"
      );
      const objectStore = transaction.objectStore("articles");

      const request = objectStore.add(article);
      request.onerror = (event) => {
        this.error = event.target.error;
        reject(this.error);
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });
  }

  async getAllArticles() {
    if (!this.dbInstance) {
      await this.openDB();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.dbInstance.transaction(["articles"], "readonly");
      const objectStore = transaction.objectStore("articles");
      const request = objectStore.getAll();

      request.onerror = (event) => {
        this.error = event.target.error;
        reject(this.error);
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });
  }

  async removeFromFavorite(url) {
    if (!this.dbInstance) {
      await this.openDB();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.dbInstance.transaction(
        ["articles"],
        "readwrite"
      );
      const objectStore = transaction.objectStore("articles");
      const request = objectStore.delete(url);

      request.onerror = (event) => {
        this.error = event.target.error;
        reject(this.error);
      };

      request.onsuccess = () => {
        resolve(true);
      };
    });
  }
}

const favoriteArticles = new FavoriteArticles();
export default favoriteArticles;
