import Vue from "vue";
import {
  Button,
  Message,
  MessageBox,
  Carousel,
  CarouselItem,
  Card,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
