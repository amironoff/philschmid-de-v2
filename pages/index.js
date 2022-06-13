import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import ListCard from '@/components/ListCard'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ListLayout from '@/layouts/ListLayout'
import { getAllTags } from '@/lib/tags'
import Image from '@/components/Image'
import { useState } from 'react'
import Pagination from '@/components/Pagination'

import NewsletterForm from '@/components/NewsletterForm'

export const POSTS_PER_PAGE = 4

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  const tags = await getAllTags('blog')
  const topTags = Object.keys(tags)
    .sort((a, b) => tags[b] - tags[a])
    .slice(0, 5)
  console.log(topTags)

  return { props: { initialDisplayPosts, posts, pagination, tags: topTags } }
}

export default function Home({ posts, initialDisplayPosts, pagination, tags }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex-row sm:flex">
        <div>
          <div className="my-4 hidden text-5xl font-semibold sm:block">
            philschmid <span className="text-gray-500 dark:text-gray-200"> blog</span>
          </div>
          {tags && (
            <div className="hidden sm:block">
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
          <div className="relative max-w-lg sm:mt-12 md:mt-24">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="m-auto hidden sm:block">
          <Image
            src="/static/images/author/philippschmid-medium.png"
            alt="philipp-schmid-medium"
            width="256px"
            height="256px"
            className="h-24 w-24 rounded-full"
          />
        </div>
      </div>
      <ul className="mt-2 grid auto-rows-max gap-4 xl:grid-cols-2 xl:gap-8	">
        {!filteredBlogPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter) => (
          <ListCard key={frontMatter.slug} {...frontMatter} />
        ))}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
