import { useGetFakeStoreQuery } from "../../service/FakeStoreApi"
import FakeStoreCard from "../../reuseable/FakeStoreCard"

const FakeStore = () => {

  const data = useGetFakeStoreQuery()
  console.log(data)
  return (
    <div>
      <FakeStoreCard data={data}/>
    </div>
  )
}
export default FakeStore