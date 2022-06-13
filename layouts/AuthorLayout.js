import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    tags,
    avatar,
    occupation,
    extra_1,
    location,
    company,
    email,
    twitter,
    linkedin,
    github,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {name}
          </h1>
          {tags && (
            <div className="">
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 ">
            <div className="hidden sm:block">
              <Image
                src={avatar}
                alt="avatar"
                width="512px"
                height="512px"
                className="h-48 w-48 rounded-full "
              />
            </div>

            <h3 className="hidden pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight sm:block">
              {name}
            </h3>
            <div className="hidden text-gray-500 dark:text-gray-400 sm:block">{location}</div>
            <div className="hidden text-gray-500 dark:text-gray-400 sm:block">{occupation}</div>
            <div className="hidden text-gray-500 dark:text-gray-400 sm:block">{company}</div>
            <div className="hidden text-gray-500 dark:text-gray-400 sm:block">{extra_1}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
