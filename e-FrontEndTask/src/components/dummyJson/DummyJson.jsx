import { useGetDummyJsonQuery } from "../../service/DummyJsonApi"
import DummyJsonCard from "../../reuseable/DummyJsonCard"

const DummyJson = () => {
  const data = useGetDummyJsonQuery()
  // console.log(data)
  return (
    <div>
      <DummyJsonCard data={data}/>
    </div>
  )
}

export default DummyJson