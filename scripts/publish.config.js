import fs from 'fs'

export const convert = (targetPlatform) => {
    console.log('Start building: write vite.config.ts')
    
    const content = fs.readFileSync('./baseUrl.json', {
        encoding: 'utf-8'
    })

    let contentJSON = JSON.parse(content)
    contentJSON.base = targetPlatform
    
    fs.writeFileSync('baseURL.json', JSON.stringify(contentJSON), {
        encoding: 'utf-8',
    })
    
    console.log('End building: write vite.config.ts')
}
