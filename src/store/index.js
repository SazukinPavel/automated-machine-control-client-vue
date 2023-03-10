import snackbar from "@/store/modules/snackbar";
import app from "@/store/modules/app";
import auth from "@/store/modules/auth";
import users from "@/store/modules/users";
import machines from "@/store/modules/machines";
import departaments from "@/store/modules/departaments";
import defects from "@/store/modules/defects";
import { createStore } from "vuex-extensions";
import { Store } from "vuex";

export default createStore(Store, {
  modules: {
    app,
    auth,
    snackbar,
    defects,
    machines,
    users,
    departaments,
  },
});
