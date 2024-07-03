import Loader from '@/components/shared/Loader';
import { useGetRecentPosts } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite';
import PostCard from '@/components/shared/PostCard';

const Home = () => {
  const {data:recentPosts, isPending:isPostLoading}= useGetRecentPosts();
  return (
    <div className='flex flex-1'>
      <div className='home-container'>
        <div className='home-posts'>
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
          {isPostLoading && !recentPosts ? 
          (<Loader/>) :
          (
          <ul className='flex flex-col gap-5'>
              {recentPosts?.documents.map((post: Models.Document) => (
              <li>
             <PostCard  post={post} key={post.$id}/>
              </li>
            )
             )
              }
          </ul>
        )}
        </div>
      </div>
    </div>
  )
}

export default Home