import fs from 'fs'
import * as baseURL from './publish-url.js'

export const convert = () => {
    console.log('Start building: write vite.config.ts')
    
    const content = fs.readFileSync('baseUrl.json', {
        encoding: 'utf-8'
    })

    let contentJSON = JSON.parse(content)
    contentJSON.base = baseURL.firebaseBase
    console.log(`convert base to: ${contentJSON.base}`);
    
    fs.writeFileSync('baseURL.json', JSON.stringify(contentJSON), {
        encoding: 'utf-8',
    })
    
    console.log('End building: write vite.config.ts')
}

convert()
