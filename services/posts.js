import { ApiContent, HacoCmsClient, JsonType } from "hacocms-js-sdk"

class PostContent extends ApiContent {

    // title: String
    // body: String

    constructor(json) {
        super(json)

        this.title = json.title
        this.body = json.body
    }
}

export const getListPost = async () => {
    try {
        const PROJECT_SUBDOMAIN = 'truongcv-seesaa'
        const PROJECT_ACCESS_TOKEN = 'YU3Rbj5q4XJSaaSRcZ5JekyF'

        const client = new HacoCmsClient(`https://${PROJECT_SUBDOMAIN}.hacocms.com`, PROJECT_ACCESS_TOKEN)

        const res = await client.getList(PostContent, '/listPosts')

        const resStringJson = JSON.stringify(res.data)
        console.log(JSON.parse(resStringJson))

        return JSON.parse(resStringJson)
    } catch (error) {
        console.log(error)
    }
    
}