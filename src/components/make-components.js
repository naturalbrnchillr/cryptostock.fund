const { exec } = require('child_process')
const fs = require('fs')
const appRoot = require('app-root-path')




const components = [
  'AssessmentAndUnderwritingServices',
  'BrokerageServices',
  'Careers',
  'Compliance',
  'NewPage2',
  'OptimizedTradingPlatform',
  'OurServiceCommitment',
  'PersonalAccount1',
  'SecuredTokens',
  'ServicePartners',
  'SmartBlog',
  'TheRealDeal',
  'TheThreeServiceLevels',
  'Tokenizables'
]




const generate = () => {
  const dataFpath = appRoot + '/src/components/Pages/PageLayout1Template/data.json'
  const dataStr = fs.readFileSync(dataFpath, 'utf8')
  const componentFpath = appRoot + '/src/components/Pages/PageLayout1Template/index.js'

  for (let i = 0; i < components.length; i++) {
    let componentStr = fs.readFileSync(componentFpath, 'utf8')

    const component = components[i]

    const newComponentDirPath = appRoot + '/src/components/Pages/generated/PageLayout1/' + component
    const newComponentDataFpath = newComponentDirPath + '/data.json'
    const newComponentComponentFpath = newComponentDirPath + '/index.js'

    componentStr = componentStr.replace('class PageLayout1Template', 'class ' + component)
    componentStr = componentStr.replace('export default PageLayout1Template', 'export default ' + component)

    console.log('>>> mkdir: ', newComponentDirPath)
    fs.mkdirSync(newComponentDirPath)

    console.log('>>> create:', newComponentDataFpath)
    fs.writeFileSync(newComponentDataFpath, dataStr)
    console.log('>>> create:', newComponentComponentFpath)
    fs.writeFileSync(newComponentComponentFpath, componentStr)
  }
}




generate()
