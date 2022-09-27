import { useRouter } from 'next/router'

function ReviewDetail() {

    const router = useRouter()

  return (
    <div>{`ReviewDetail ${router.query.bookId} --- ${router.query.reviewId}`}</div>
  )
}

export default ReviewDetail