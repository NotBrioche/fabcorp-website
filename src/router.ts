import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './views/HomePage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import CrewPage from './views/CrewPage.vue'
import FAQPage from './views/FAQPage.vue'
import NotFoundPage from './views/NotFoundPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/crew', component: CrewPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/faq', component: FAQPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  scrollBehavior(to) {
    {
      if (to.hash) {
        return { behavior: 'smooth', el: to.hash }
      } else {
        return { top: 0 }
      }
    }
  },
  routes,
})
