
import { ScenarioList } from '../pages/scenario/ScenarioList'
import { ScenarioDetail } from '../pages/scenario/ScenarioDetail'

const scenarioRoutes = [
  { path: '/app/scenarios', component: ScenarioList },
  { path: '/app/scenarios/:id', component: ScenarioDetail }
]

export default scenarioRoutes
