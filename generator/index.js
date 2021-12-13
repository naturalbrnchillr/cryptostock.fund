const { exec } = require('child_process')
const fs = require('fs')
const appRoot = require('app-root-path')
const cheerio = require('cheerio')
const request = require('request')
const download = require('image-downloader')

const downloadImage = (uri, imageDirPath, imageName) => {
  return new Promise(async (resolve, reject) => {

    if (typeof uri !== 'string') return resolve()

    const dest = imageDirPath + '/' + imageName

    console.log('>>> dest', dest)

    download.image({
      url: uri,
      dest
    })
    .then(fpath => {
      console.log('downloaded', fpath)
      return resolve()
    })
    .catch(err => {
      console.log(err)
      return resolve()
    })

    /*

    if (typeof uri !== 'string') return resolve()


    download.image({
      url: uri,
      dest: imageDirPath + '/' + imageName
    })
    .then(fname => {
      return resolve(fname)
    })
    .catch(err => {
      return resolve()
      // console.log(err)
    })

    */

    return resolve()

  })
}

const dataToJSON = data => {
    const json = {}

    let numH1 = 0
    let numH3 = 0
    let numP = 0
    let numImage = 0
    let numLink = 0

    for (let i = 0; i < data.length; i++) {
      const arr = data[i]

      let key = arr[0]

      if (key == 'h1') {
        numH1++

        if (numH1 != 0) {
          key = "h1-" + (numH1 - 1)
        }
      }
      if (key == 'h3') {
        numH3++

        if (numH3 != 0) {
          key = "h3-" + (numH3 - 1)
        }
      }
      if (key == 'p') {
        numP++

        if (numP != 0) {
          key = "p-" + (numP - 1)
        }
      }
      if (key == 'img') {
        numImage++

        if (numImage != 0) {
          key = "img-" + (numImage - 1)
        }
      }
      if (key == 'a') {
        numLink++

        if (numLink != 0) {
          key = "a-" + (numLink - 1)
        }
      }

      const val = arr[1]

      json[key] = val
    }

    return json
}

const srcToJSON = (src, imagesDirPath) => {
  const startPointStr = '<main id="page"'
  const endPointStr = '</main>'

  const startPointIndexOf = src.indexOf(startPointStr)
  const endPointIndexOf = src.indexOf(endPointStr)

  src = src.substring(startPointIndexOf, endPointIndexOf)

  const data = []

  const $ = cheerio.load(src)

  let nthImage = 0

  $('h1, h3, p, img').each(async (i, el) => {
    let arr

    if (el.name === 'h1') {
      arr = [ 'h1', el.children[0].data ]
    } else if (el.name === 'h3') {
      arr = [ 'h3', el.children[0].data ]
    } else if (el.name === 'p') {
      arr = [ 'p', $(el).html() ]
    } else if (el.name === 'img') {
      const imgSrc = el.attribs.src

      if (typeof imgSrc === 'string') {

        const split = imgSrc.split('.')
        const imgExt = split[split.length - 1]

        const imageName = 'image' + nthImage + '.' + imgExt

        nthImage++

        downloadImage(imgSrc, imagesDirPath, imageName)

        const fullImagePath = imagesDirPath + '/' + imageName
        const imagePathStart = fullImagePath.indexOf('/images')
        const imagePath = fullImagePath.substring(imagePathStart)

        arr = [ 'img', imagePath ]

      } else {
        arr = [ '', '' ]
      }

    }

    data.push(arr)
  })

  const json = dataToJSON(data)

  return json
}

const generateComponent = async (name, src) => {
  console.log('---')

  console.log('>>> Generating component', name)

  const componentDirPath = '/home/ubuntu/environment/cryptostock.fund/src/components/Pages/generated/PageLayout1/' + name
  console.log('>>>', componentDirPath)
  fs.mkdirSync(componentDirPath)

  const componentImagesDirPath = '/home/ubuntu/environment/cryptostock.fund/public/images/' + name
  console.log('>>>', componentImagesDirPath)
  if (!fs.existsSync(componentImagesDirPath)) {
    fs.mkdirSync(componentImagesDirPath)
  }

  const json = srcToJSON(src, componentImagesDirPath)
  
  const componentDataFpath = componentDirPath + '/data.json'
  const componentComponentFpath = componentDirPath + '/index.js'

  const componentComponentTemplateFpath = '../src/components/Pages/PageLayout1Template/index.js'
  let componentStr = fs.readFileSync(componentComponentTemplateFpath, 'utf8')
  componentStr = componentStr.replace('class PageLayout1Template', 'class ' + name)
  componentStr = componentStr.replace('export default PageLayout1Template', 'export default ' + name)

  fs.writeFileSync(componentDataFpath, JSON.stringify(json, null, 2))
  fs.writeFileSync(componentComponentFpath, componentStr)
}

const srcFileNames = [
  'index.txt',
  'for-corporate-clients.txt',
  'corporate-account.txt',
  'for-company-clients.txt',
  'tokenizables.txt',
  'our-service-commitment.txt',
  'personal-account-1.txt',
  'secured-tokens.txt',
  'service-partners.txt',
  'tokenize-now.txt',
  'crypto-as-a-stock.txt',
  'assessment-and-underwriting-services.txt',
  'brokerage-services.txt',
  'custodian-services.txt',
  'dpm-market-making-services.txt',
  'key-account-management.txt',
  'optimized-trading-platform.txt',
  'the-real-deal.txt',
  'transfer-agency-services.txt',
  'upcoming-blockchain-conferences.txt',
  'investment-form.txt',
  'new-page-2.txt',
  'careers.txt',

  'contact-us.txt',
  'new-page-3.txt',
  'cookies.txt'

]

const srcComponentMap = {
  'index.txt': 'Home',
  'for-corporate-clients.txt': 'ForCorporateClients',
  'corporate-account.txt': 'CorporateAccount',
  'for-company-clients.txt': 'ForCompanyClients',
  'tokenizables.txt': 'Tokenizables',
  'our-service-commitment.txt': 'OurServiceCommitment',
  'personal-account-1.txt': 'PersonalAccount1',
  'secured-tokens.txt': 'SecuredTokens',
  'service-partners.txt': 'ServicePartners',
  'tokenize-now.txt': 'TokenizeNow',

  'crypto-as-a-stock.txt': 'CryptoAsAStock',
  'assessment-and-underwriting-services.txt': 'AssessmentAndUnderwritingServices',
  'brokerage-services.txt': 'BrokerageServices',
  'custodian-services.txt': 'CustodianServices',
  'dpm-market-making-services.txt': 'DpmMarketMakingServices',
  'key-account-management.txt': 'KeyAccountManagement',
  'optimized-trading-platform.txt': 'OptimizedTradingPlatform',
  'the-real-deal.txt': 'TheRealDeal',
  'transfer-agency-services.txt': 'TransferAgencyServices',
  'upcoming-blockchain-conferences.txt': 'UpcomingBlockchainConferences',
  'investment-form.txt': 'InvestmentForm',
  'new-page-2.txt': 'NewPage2',
  'careers.txt': 'Careers',

  'contact-us.txt': 'ContactUs',
  'new-page-3.txt': 'NewPage3',
  'cookies.txt': 'Cookies'

}

const generate = () => {
  const componentsDirPath = '/home/ubuntu/environment/cryptostock.fund/src/components/Pages/generated/PageLayout1/'
  console.log('>>> Deleting any existing generated')
  exec('cd ' + componentsDirPath + '; rm -rf *')

  // Block execution to be sure directories are deleted.
  console.log('... sleeping')
  const currTime = new Date().getTime()
  while (currTime + 3000 >= new Date().getTime()) {}

  for (let i = 0; i < srcFileNames.length; i++) {
    const srcFileName = srcFileNames[i]
    console.log('>>> Generating from', srcFileName)
    const componentName = srcComponentMap[srcFileName]

    const src = fs.readFileSync(appRoot + '/srcfiles/' + srcFileName, 'utf8')

    generateComponent(componentName, src)

    if (i === srcFileNames.length - 1) {
      console.log('>>> DONE')
    }
  }
}

generate()
