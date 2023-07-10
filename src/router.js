
import {createRouter, createWebHashHistory} from 'vue-router'

import Home from './pages/Home/Home.vue'
import Promotions from './pages/Promotions/Promotions.vue'
import About from './pages/About/About.vue'
import Contact from './pages/Contact/Contact.vue'
import Requests from './pages/Requests/Requests.vue'
import SavoryPizzas from './pages/SavoryPizzas/SavoryPizzas.vue'
import SweetPizzas from './pages/SweetPizzas/SweetPizzas.vue'
import SoftDrinks from './pages/SoftDrinks/SoftDrinks.vue'
import Beers from './pages/Beers/Beers.vue'
import Juices from './pages/Juices/Juices.vue'
import Wines from './pages/Wines/Wines.vue'
import Drinks from './pages/Drinks/Drinks.vue'






const routes = [
  {path: '/', component: Home},
  {path: '/promoções', component: Promotions},
  {path: '/sobre-nós', component: About},
  {path: '/fale-conosco', component: Contact},
  {path: '/meus-pedidos', component: Requests},
  {path: '/pizzas-salgadas', component: SavoryPizzas},
  {path: '/pizzas-doces', component: SweetPizzas},
  {path: '/refrigerantes', component: SoftDrinks},
  {path: '/cervejas', component: Beers},
  {path: '/sucos', component: Juices},
  {path: '/vinhos', component: Wines},
  {path: '/drinks', component: Drinks},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  }
})

export default router