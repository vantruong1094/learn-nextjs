
import { useRouter } from 'next/router'

function BookDetail() {

    const router = useRouter()

  return (
    <div>{`BookDetail ${router.query.bookId}`}</div>
  )
}

export default BookDetail