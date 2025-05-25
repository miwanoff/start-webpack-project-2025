import basket from "./modules/basket";
import goods from "./modules/goods";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/basket.css";
import "../css/goods.css";
window.addEventListener("DOMContentLoaded", function () {
  basket();
  goods();
});
