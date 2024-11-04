import { ClockLoader } from 'react-spinners'

const override = {
  display: 'block',
  margin: '100px auto',
}

const Loader = ({ loading }) => {
  return (
    <ClockLoader
      color="#E5BA57"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  )
}

export default Loader
