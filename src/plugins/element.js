import Vue from "vue";
import {
  Button,
  Message,
  MessageBox,
  Carousel,
  CarouselItem,
  Card,
  Row,
  Col,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
