import Vue from "vue";
import { Button, Input, Message, MessageBox, Carousel, CarouselItem, Form, FormItem, Popover } from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Popover);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;