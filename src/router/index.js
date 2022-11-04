import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const HomeLayout = () => [
  {
    path: "",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Homepage" */ "@/views/home/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "Login | Petigrity" },
    component: () =>
      import(/* webpackChunkName: "About" */ "@/views/page/AboutView.vue"),
  },
  {
    path: "/service",
    name: "services",
    meta: { title: "Login | Petigrity" },
    component: () =>
      import(/* webpackChunkName: "About" */ "@/views/page/ServiceView.vue"),
  },
  {
    path: "/service/training",
    name: "service.training",
    meta: { title: "Login | Petigrity" },
    component: () =>
      import(
        /* webpackChunkName: "About" */ "@/views/page/services/TrainingView.vue"
      ),
  },
  {
    path: "/service/health-insurance",
    name: "service.health",
    meta: { title: "Login | Petigrity" },
    component: () =>
      import(
        /* webpackChunkName: "About" */ "@/views/page/services/HealthInsuranceView.vue"
      ),
  },
  {
    path: "/service/recruitment",
    name: "service.recruitment",
    meta: { title: "Login | Petigrity" },
    component: () =>
      import(
        /* webpackChunkName: "About" */ "@/views/page/services/RecruitmentView.vue"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    meta: { title: "Login | Petigrity" },
    component: () =>
      import(/* webpackChunkName: "About" */ "@/views/page/ContactView.vue"),
  },
];

const SimpleLayout = () => [
  // {
  //   path: "login",
  //   name: "login",
  //   meta: { title: "Login | Petigrity" },
  //   component: () =>
  //     import(/* webpackChunkName: "Login" */ "@/views/auth/LoginView.vue"),
  // },
  // {
  //   path: "register",
  //   name: "register",
  //   meta: { title: "Register | Petigrity" },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Register" */ "@/views/auth/RegisterView.vue"
  //     ),
  // },
  // {
  //   path: "verify",
  //   name: "verify",
  //   meta: { title: "Verification | Petigrity" },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Register" */ "@/views/auth/VerificationView.vue"
  //     ),
  // },
];

const routes = [
  // Homelayout
  {
    path: "",
    meta: {
      title: "Home | Petigrity",
      // metaTags: [
      //   {
      //     name: "description",
      //     content:
      //       "Supero Agrobase Limited is an indigenous company in Nigeria with deep understanding of the needs and challenges of Nigerian farmers. We deal with  Agro - Input products, claims, research and Promotion, Sales of Agro input Products (AgriCourt Ventures) and Production of Vegetable Crops (HarvestYield Farm)",
      //   },
      //   {
      //     property: "og:description",
      //     content:
      //       "Supero Agrobase Limited is an indigenous company in Nigeria with deep understanding of the needs and challenges of Nigerian farmers. We deal with  Agro - Input products, claims, research and Promotion, Sales of Agro input Products (AgriCourt Ventures) and Production of Vegetable Crops (HarvestYield Farm)",
      //   },
      //   {
      //     name: "keywords",
      //     content:
      //       "irrigation cultivation husbandry horticulture crop biofuel farm animal husbandry farming cultivate agribusiness food domestication agricultural manure  tillage monoculture forestry livestock harvest agronomy pesticide cotton wheat crop rotation dairy aquaculture sow overcrop education raw material genetically modified organism selective breeding climate plow farmer plant fertilize fiber grow fertile crescent",
      //   },
      // ],
    },
    component: () =>
      import(
        /* webpackChunkName: "Home Layout" */ "@/layouts/home/HomeLayout.vue"
      ),
    children: HomeLayout(),
  },
  //Simple layout - dashboard
  {
    path: "/auth",
    meta: {
      title: "Dashboard | Petigrity",
      // metaTags: [
      //   {
      //     name: "description",
      //     content:
      //       "Supero Agrobase Limited is an indigenous company in Nigeria with deep understanding of the needs and challenges of Nigerian farmers. We deal with  Agro - Input products, claims, research and Promotion, Sales of Agro input Products (AgriCourt Ventures) and Production of Vegetable Crops (HarvestYield Farm)",
      //   },
      //   {
      //     property: "og:description",
      //     content:
      //       "Supero Agrobase Limited is an indigenous company in Nigeria with deep understanding of the needs and challenges of Nigerian farmers. We deal with  Agro - Input products, claims, research and Promotion, Sales of Agro input Products (AgriCourt Ventures) and Production of Vegetable Crops (HarvestYield Farm)",
      //   },
      //   {
      //     name: "keywords",
      //     content:
      //       "irrigation cultivation husbandry horticulture crop biofuel farm animal husbandry farming cultivate agribusiness food domestication agricultural manure  tillage monoculture forestry livestock harvest agronomy pesticide cotton wheat crop rotation dairy aquaculture sow overcrop education raw material genetically modified organism selective breeding climate plow farmer plant fertilize fiber grow fertile crescent",
      //   },
      // ],
    },
    component: () =>
      import(
        /* webpackChunkName: "Simple Layout" */ "@/layouts/SimpleLayout.vue"
      ),
    children: SimpleLayout(),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  /* ---------------------------------------------//? SEO Friendly META -------------------------------------------- */

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
