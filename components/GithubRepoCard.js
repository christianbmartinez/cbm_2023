import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className='p-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-2xl '>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-50'>
        {latestRepo.name}
      </h2>
      <p className='mb-5 font-light text-zinc-100'>{latestRepo.description}</p>
      <div className='flex justify-between items-center'>
        <Link
          href={latestRepo.clone_url}
          aria-label={`Christian B Martinez | Repo Link for ${latestRepo.name}`}
          target='_blank'
          className='inline-flex items-center font-medium text-zinc-50 hover:text-zinc-200 transition duration-300 ease-in-out'
        >
          Repo
          <FaGithub className='ml-2' />
        </Link>
        <p className='text-zinc-50 inline-flex items-center font-medium'>
          {`${dayjs(latestRepo.pushed_at).fromNow(true)} ago`}
        </p>
      </div>
    </div>
  )
}

export default GithubRepoCard
