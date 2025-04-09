if (authenticated) {
    renderApp();
   } else {
    renderLogin();
}

authenticated ? renderApp() : renderLogin();

const x = 10;
let y = '';

y = x > 5 ? ">>> geater than 5" : "less than 5";
console.log(y);