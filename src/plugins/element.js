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
  TabPane,
  Tabs,
  Loading,
  Icon,
  Dialog,
  Checkbox,
  CheckboxGroup,
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
Vue.use(Icon);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(TabPane);
Vue.use(Tabs);

Vue.use(Loading.directive);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
