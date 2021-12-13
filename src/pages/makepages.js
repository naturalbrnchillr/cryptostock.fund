const { exec } = require('child_process')

const pages = [
  'crypto-as-a-stock',
  'assessment-and-underwriting-services',
  'brokerage-services',
  'custodian-services',
  'dpm-market-making-services',
  'key-account-management',
  'optimized-trading-platform',
  'the-real-deal',
  'transfer-agency-services',
  'upcoming-blockchain-conferences',
  'investment-form'
]

for (let i = 0; i < pages.length; i++) {
  const page = pages[i]

  const cmd = 'cp compliance.js ' + page + '.js'

  exec(cmd, (err, stdout, stderr) => {
    if (err) console.log(err)
    if (stderr) console.log(stderr)
    console.log(stdout)
  })
}
