import Vue from "vue";
import {
    Button,
    Message,
    MessageBox,
    Carousel,
    CarouselItem,
    Card,
    Input,
    Form,
    FormItem,
    Popover,
    Row,
    Col,
    Table,
    TableColumn,
    Pagination,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Popover);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
