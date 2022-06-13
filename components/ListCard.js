import Link from './Link'
import Tag from './Tag'
import formatDate from '@/lib/utils/formatDate'

const Card = ({ slug, date, title, summary, tags }) => (
  <li
    key={slug}
    className="rounded-xl  border border-gray-100 bg-white p-4 py-4 text-gray-900  shadow-sm transition-shadow hover:shadow-lg focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
  >
    <article className="block h-full w-full space-y-2">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </dd>
      </dl>
      <div className="space-y-3 xl:col-span-3">
        <div>
          <h3 className="text-2xl font-semibold leading-8 tracking-tight ">
            <Link
              href={`/${slug}`}
              className="text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
            >
              {title}
            </Link>
          </h3>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <div className="prose hidden max-w-none text-sm text-gray-500 dark:prose-dark dark:text-gray-400 md:block">
          {summary}
        </div>
      </div>
    </article>
  </li>
)

export default Card
