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
  Table,
  TableColumn,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
