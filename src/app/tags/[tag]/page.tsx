import { Post, allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { sortByMostRecent } from '@/lib/utils'

import PostItem from '@/components/PostItem'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import TagCloud from '@/components/TagCloud'

interface TaggedPostsPageProps {
  params: {
    tag: string
  }
}

async function getTaggedPostsFromParams(tag: string) {
  const taggedPosts = allPosts.filter(post => post.tags && hasTag(post.tags, tag))
  return !taggedPosts ? notFound() : taggedPosts
}

function hasTag(tags: string[], tagParam: string) {
  return tags.filter(tag => tag.trim() === tagParam.trim()).length !== 0
}

function getTagsFromPosts(posts: Post[]) {
  return allPosts.reduce((currentTags: string[], post: Post) => {
    const postTags = post.tags?.map(tag => tag.trim()) || []
    return currentTags.concat(postTags.filter(tag => !currentTags.includes(tag))).sort()
  }, [])
}

export default async function TaggedPostsPage({ params }: TaggedPostsPageProps) {
  const taggedPosts = await getTaggedPostsFromParams(params.tag)
  const allTags = getTagsFromPosts(allPosts)
  return (
    <div className="">
      <h2 className="typo-h2 flex items-center">
        Tag: ‎
        <Icons.hash strokeWidth={3} /> {params.tag}
      </h2>
      <p className="typo-p">Here, you can browse all the posts by tags. Start with selecting a tag.</p>
      <TagCloud />

      {taggedPosts.length > 0 ? (
        <div id="post-items" className="flex flex-col gap-16">
          {sortByMostRecent(taggedPosts).map((post: any) => (
            <PostItem key={post.tag} post={post} />
          ))}
        </div>
      ) : (
        <div id="post-items" className="flex flex-col gap-16">
          <p className="typo-p text-muted/70 flex items-center gap-2">
            {' '}
            No post to show for this tag <Icons.sad size={18} />
          </p>
        </div>
      )}
    </div>
  )
}
