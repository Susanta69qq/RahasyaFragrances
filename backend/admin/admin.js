import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSMongoose from "@adminjs/mongoose";
import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import Address from "../models/address.model.js";
import Order from "../models/order.model.js";

AdminJS.registerAdapter(AdminJSMongoose);

//initialize AdminJS
const admin = new AdminJS({
  resources: [
    { resource: User },
    { resource: Product },
    { resource: Address },
    { resource: Order },
  ],
  rootPath: "/admin",
});

//Admin credentials
const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

//Build autheticated router
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
  cookieName: process.env.ADMIN_COOKIE,
  cookiePassword: process.env.ADMIN_COOKIE_PASS,
});

export { admin, adminRouter };
