import Vue from "vue";
import {
  Button,
  Message,
  MessageBox,
  Pagination,
  Table,
  TableColumn
} from "element-ui";

Vue.use(Button);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;