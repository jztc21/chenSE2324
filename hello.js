function greeting() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Hello World');
        resolve();
      }, 2000);
    });
  }
  greeting();