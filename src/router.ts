import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './views/HomePage.vue'
import ProjectsPage from './views/ProjectsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/presentation', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/faq', component: HomePage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  scrollBehavior(to) {
    {
      if (to.hash) {
        return { behavior: 'smooth', el: to.hash }
      }

      return { top: 0 }
    }
  },
  routes,
})
