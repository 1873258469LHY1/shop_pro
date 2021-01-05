import Vue from "vue";
import { Button, Message, MessageBox, Carousel, CarouselItem } from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;