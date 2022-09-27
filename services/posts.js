import { ApiContent, HacoCmsClient } from "hacocms-js-sdk"

const PROJECT_SUBDOMAIN = 'truongcv-seesaa'
const PROJECT_ACCESS_TOKEN = 'YU3Rbj5q4XJSaaSRcZ5JekyF'
const PROJECT_DRAFT_TOKEN = 'xRrfHk8ZSCTcYtwGSDoCUxig'

const client = new HacoCmsClient(
    `https://${PROJECT_SUBDOMAIN}.hacocms.com`,
    PROJECT_ACCESS_TOKEN,
    PROJECT_DRAFT_TOKEN
)


class PostContent extends ApiContent {

    constructor(json) {
        super(json)

        this.category = json.category
        this.title = json.title
        this.content = json.content
        this.urlImage = json.urlImage
    }
}

export const getListPost = async () => {
    try {
        
        const res = await client.getListIncludingDraft(PostContent, '/posts')

        const resStringJson = JSON.stringify(res.data)
        console.log(`data record >>>>> ${res.data.length}`)
        
        return JSON.parse(resStringJson)
    } catch (error) {
        console.log(error)
    }
    
}

export const getPostIds = async () => {
    try {

        const res = await client.getListIncludingDraft(PostContent, '/posts')

        const resStringJson = JSON.stringify(res.data)
        const paramIds = JSON.parse(resStringJson).map( post => (
            {
                params: { id: `${post.id}` }
            }
        ) )

        return paramIds
    } catch (error) {
        console.log(error)
    }
}

export const getPostById = async id => {
    try {
        
        console.log(`postId >>>> ${id}`)
        const res = await client.getContent(PostContent, '/posts', id)

        const resStringJson = JSON.stringify(res)
        return JSON.parse(resStringJson)
    } catch (error) {
        console.log(error)
    }
}