import Vue from "vue";
import { Button, Message, MessageBox, Pagination, } from "element-ui";

Vue.use(Pagination);
Vue.use(Button);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;