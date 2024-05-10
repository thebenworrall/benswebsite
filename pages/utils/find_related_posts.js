
const findRelatedPosts = (currentTags, allPosts, currentPostId) => {

    return allPosts
    .filter(post => post.id !== currentPostId)
    .map(post => ({
      ...post,
      matchCount: post.tags.filter(tag => currentTags.includes(tag.sys.id)).length
    }))
    .filter(post => post.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 4)
    
}


export default findRelatedPosts