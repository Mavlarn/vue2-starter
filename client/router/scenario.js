
import ScenarioList from '../pages/scenario/ScenarioList'
import ScenarioDetail from '../pages/scenario/ScenarioDetail'

const scenarioRoutes = [
  { path: 'scenarios/:id', component: ScenarioDetail },
  { path: 'scenarios', component: ScenarioList }
]

export default scenarioRoutes
