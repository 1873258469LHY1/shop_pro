import Vue from "vue";
import {
    Button,
    Message,
    MessageBox,
    Carousel,
    CarouselItem,
    Card,
    Input,
    Form, FormItem, Popover
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Popover);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
